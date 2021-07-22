import React, {useState} from 'react';

import {View, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {postRegister} from '../../../services/register';
import {getIndicationAccount} from '../../../services/indication';

import Icon from 'react-native-vector-icons/dist/Entypo';
import CheckBox from 'react-native-vector-icons/dist/MaterialIcons';
import SnackBar from '../../../shared/components/SnackBar';

import {
  Body,
  TermsView,
  ConfirmButton,
  ButtonText,
  HeaderText,
  HeaderDescription,
  Header,
  HeaderGradient,
  ButtonGradient,
  TextStyle,
  TextInputStyle,
} from './styles';

import {
  cpfMask,
  birthMask,
  celMask,
  phoneStyle,
  dataStyle,
  cpfStyle,
  pswCompareStyle,
  inputViewRed,
  mailStyle,
} from '../../../shared/utils/masks';

var timer;

export default function Register() {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {token} = useSelector((state) => ({...state.login}));

  const [register, setRegister] = useState(0);
  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [birth, setBirth] = useState('');
  const [company, setCompany] = useState('');
  const [coupon, setCoupon] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [terms, setTerms] = useState(false);

  const [displayed, setDisplayed] = useState(false);
  const [snackText, setSnackText] = useState('Não foi possível fazer login');
  const [colorChange, setColorChange] = useState(false);

  var grey = '#7c7b7b';
  var red = '#ce4257';

  const closeModal = () => {
    setDisplayed(false);
    clearTimeout(timer);
  };

  const Display = () => {
    setColorChange(true);
    setDisplayed(true);
    timer = setTimeout(() => setDisplayed(false), 3000);
  };

  function checkFields(x) {
    if (x == 1) {
      if (name !== '' && cpf !== '' && birth !== '') {
        if (cpf.length == 14 && birth.length == 10) {
          setRegister(1);
          setColorChange(false);
        } else {
          setSnackText('Preencha os campos corretamente');
          Display();
        }
      } else {
        setSnackText('Preencha todos os campos');
        Display();
      }
    }
    if (x == 2) {
      if (
        password == password2 &&
        terms !== false &&
        phone.length == 15 &&
        email.search('@') !== -1 &&
        password.length >= 6 &&
        password2.length >= 6
      ) {

        dispatch({
          type: 'USER_TUTORIAL_LOGIN',
          payload: { 
            cpf:cpf, 
            password:password
          }
        });
        
          postRegister(name, cpf, birth, email, phone, password, terms);
        if (coupon !== '') {
          getIndicationAccount(coupon, token);
        }

        navigation.navigate('Tutorial');
      } else {
        setSnackText('Verifique todos os campos');
        Display();
      }
      if (terms == false) {
        setSnackText('Concorde com os termos');
        Display();
      }
      if (password !== password2) {
        setSnackText('As senhas precisam ser iguais');
        Display();
      }
      if(password.length < 6 || password2.length < 6){
        setSnackText('As senhas de pelo menos 6 caracteres');
        Display();
      }
    }
  }

  return (
    <>
      {register == 0 && (
        <>
          <SnackBar
            showSnack={displayed}
            toggle={closeModal}
            text={snackText}
          />
          <HeaderGradient
            colors={['#041b4e', '#093575', '#0e4b97']}
            useAngle={true}
            angle={100}
            angleCenter={{x: 0.5, y: 0.5}}>
            <Header>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Icon name="chevron-thin-left" size={30} color="white" />
              </TouchableOpacity>
              <View>
                <HeaderText>Vamos começar</HeaderText>
                <HeaderDescription>
                  Informe seu dados pessoais
                </HeaderDescription>
              </View>
            </Header>
          </HeaderGradient>

          <Body>
            <View>
              <TextInputStyle
                style={inputViewRed(name, colorChange)}
                value={name}
                placeholder="Seu nome"
                onChangeText={setName}
                placeholderTextColor={colorChange && name == '' ? red : grey}
              />
              <TextInputStyle
                style={[
                  inputViewRed(cpf, colorChange),
                  {
                    borderBottomColor: cpfStyle(cpf, colorChange)
                      ? red
                      : 'black',
                  },
                ]}
                value={cpf}
                maxLength={14}
                keyboardType={'numeric'}
                onChangeText={(cpf) => setCPF(cpfMask(cpf))}
                placeholder="CPF"
                placeholderTextColor={colorChange && cpf == '' ? red : grey}
              />
              <TextInputStyle
                style={[
                  inputViewRed(birth, colorChange),
                  {
                    borderBottomColor: dataStyle(birth, colorChange)
                      ? red
                      : 'black',
                  },
                ]}
                value={birth}
                placeholder="Data de nascimento"
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(birth) =>
                  setBirth(birthMask(birth, colorChange))
                }
                placeholderTextColor={colorChange && birth == '' ? red : grey}
              />
              <TextInputStyle
                value={company}
                placeholder="Qual sua empresa? (opcional)"
                onChangeText={setCompany}
                placeholderTextColor="#7c7b7b"
              />
              <TextInputStyle
                value={coupon}
                placeholder="Código de indicação (opcional)"
                onChangeText={setCoupon}
                placeholderTextColor="#7c7b7b"
              />
            </View>

            <ButtonGradient
              colors={['#041b4e', '#093575', '#0e4b97']}
              useAngle={true}
              angle={100}
              angleCenter={{x: 0.5, y: 0.5}}>
              <ConfirmButton
                onPress={() => {
                  checkFields(1);
                }}>
                <ButtonText>Próximo passo</ButtonText>
              </ConfirmButton>
            </ButtonGradient>
          </Body>
        </>
      )}
      {register == 1 && (
        <>
          <SnackBar
            showSnack={displayed}
            toggle={closeModal}
            text={snackText}
          />
          <HeaderGradient
            colors={['#041b4e', '#093575', '#0e4b97']}
            useAngle={true}
            angle={100}
            angleCenter={{x: 0.5, y: 0.5}}>
            <Header>
              <TouchableOpacity onPress={() => setRegister(0)}>
                <Icon name="chevron-thin-left" size={30} color="white" />
              </TouchableOpacity>
              <View>
                <HeaderText>Sua conta</HeaderText>
                <HeaderDescription>Crie seus dados de acesso</HeaderDescription>
              </View>
            </Header>
          </HeaderGradient>

          <Body>
            <ScrollView
              horizontal={false}
              contentContainerStyle={{
                justifyContent: 'space-evenly',
                flex: 1,
              }}>
              <View>
                <TextInputStyle
                  style={[
                    inputViewRed(email, colorChange),
                    mailStyle(email, colorChange),
                  ]}
                  value={email}
                  placeholder="E-mail"
                  onChangeText={setEmail}
                  keyboardType={'email-address'}
                  placeholderTextColor={colorChange && email == '' ? red : grey}
                />
                <TextInputStyle
                  style={[
                    inputViewRed(phone, colorChange),
                    phoneStyle(phone, colorChange),
                  ]}
                  value={phone}
                  placeholder="Celular"
                  maxLength={15}
                  onChangeText={(phone) => setPhone(celMask(phone))}
                  keyboardType={'numeric'}
                  placeholderTextColor={colorChange && phone == '' ? red : grey}
                />
                <TextInputStyle
                  style={pswCompareStyle(password, password2, colorChange)}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Senha"
                  placeholderTextColor={
                    colorChange && password == '' ? red : grey
                  }
                />
                <TextInputStyle
                  style={[
                    inputViewRed(password2, colorChange),
                    pswCompareStyle(password2, password, colorChange),
                  ]}
                  value={password2}
                  onChangeText={setPassword2}
                  placeholder="Confirmar Senha"
                  placeholderTextColor={
                    (colorChange && password2 == '') ||
                    (colorChange && password !== password2)
                      ? red
                      : grey
                  }
                />
              </View>
              <TermsView>
                <TouchableOpacity onPress={() => setTerms(!terms)}>
                  {terms ? (
                    <CheckBox name="check-box" size={30} color="#00a8ff" />
                  ) : (
                    <CheckBox
                      name="check-box-outline-blank"
                      size={30}
                      color="#00a8ff"
                    />
                  )}
                </TouchableOpacity>
                <TextStyle>
                  Li e concordo com os{' '}
                  <TextStyle
                    policy
                    onPress={() => {
                      navigation.navigate('Termos');
                    }}>
                    termos de uso e políticas de privacidade
                  </TextStyle>
                </TextStyle>
              </TermsView>
            </ScrollView>

            <ButtonGradient
              colors={['#041b4e', '#093575', '#0e4b97']}
              useAngle={true}
              angle={100}
              angleCenter={{x: 0.5, y: 0.5}}>
              <ConfirmButton
                onPress={() => {
                  checkFields(2);
                }}>
                <ButtonText>Concluir cadastro</ButtonText>
              </ConfirmButton>
            </ButtonGradient>
          </Body>
        </>
      )}
    </>
  );
}
