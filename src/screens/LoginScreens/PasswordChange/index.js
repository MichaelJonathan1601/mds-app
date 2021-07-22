import React, {useState, useEffect} from 'react';
import {
  View,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Body,
  ConfirmButton,
  ButtonText,
  Header,
  TextCenter,
  ButtonGradient,
  InputView,
  TextInputStyle,
  GreyText,
  LinkText,
  HeaderGradient,
  HeaderText,
  HeaderDescription,
} from './styles';

import Lock from 'react-native-vector-icons/dist/SimpleLineIcons';
import UserIcon from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Entypo';

import SnackBar from '../../../shared/components/SnackBar';

import {postPasswordReset} from '../../../services/passwordforgot';

import {
  cpfMask,
  birthMask,
  cpfStyle,
  pswStyle,
  dataStyle,
} from '../../../shared/utils/masks';

var timer;

export default function PasswordChange() {
  const {token} = useSelector((state) => ({...state.login}));

  const [focus, setFocus] = useState(0);
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  const [birth, setBirth] = useState('');

  const [colorChange, setColorChange] = useState(false);
  const [snackText, setSnackText] = useState('Não foi possível fazer login');
  const [displayed, setDisplayed] = useState(false);

  const navigation = useNavigation();

  var grey = '#7c7b7b';
  var red = '#ef271b';

  const closeModal = () => {
    setDisplayed(false);
    clearTimeout(timer);
  };

  const Display = () => {
    setColorChange(true);
    setDisplayed(true);
    timer = setTimeout(() => setDisplayed(false), 3000);
  };

  const {isLoading} = useSelector((state) => ({...state.login}));

  const dispatch = useDispatch();

  useEffect(() => {
    LoadAsync();
  }, []);

  async function LoadAsync() {
    try {
      let x = await AsyncStorage.getItem('TOKEN');
      if (x != null) {
        console.log(x);
        dispatch({
          type: 'USER_TOKEN',
          payload: x,
        });
      }
    } catch (e) {
      alert(e);
    }
  }

  function inputViewFocus(x) {
    if (focus == x) {
      return {
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      };
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
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
            <HeaderText>Esqueci minha senha</HeaderText>
            <HeaderDescription>Informe seu dados pessoais</HeaderDescription>
          </View>
        </Header>
      </HeaderGradient>

      <Body>
        {!isLoading && (
          <View>
            <InputView
              style={[
                inputViewFocus(1),
                {
                  borderBottomColor: cpfStyle(cpf, colorChange) ? red : 'black',
                },
              ]}>
              <UserIcon
                name="person-outline"
                size={30}
                color={cpfStyle(cpf, colorChange) ? red : 'black'}
              />
              <TextInputStyle
                value={cpf}
                maxLength={14}
                keyboardType={'numeric'}
                onChangeText={(cpf) => setCPF(cpfMask(cpf))}
                onFocus={() => setFocus(1)}
                placeholder="CPF"
                placeholderTextColor={colorChange && cpf == '' ? red : grey}
              />
            </InputView>
            <InputView
              style={[
                inputViewFocus(2),
                {
                  borderBottomColor: pswStyle(password, colorChange)
                    ? red
                    : 'black',
                },
              ]}>
              <Lock
                name="lock"
                size={30}
                color={
                  (colorChange && password == '') ||
                  (colorChange && password.length < 5)
                    ? red
                    : '#0b3a7e'
                }
              />
              <TextInputStyle
                onChangeText={setPassword}
                onFocus={() => setFocus(2)}
                secureTextEntry={true}
                placeholder={'Senha'}
                placeholderTextColor={colorChange ? red : grey}
              />
            </InputView>
            <InputView
              style={[
                inputViewFocus(3),
                {
                  borderBottomColor: dataStyle(birth, colorChange)
                    ? red
                    : 'black',
                },
              ]}>
              <Lock
                name="calendar"
                size={30}
                color={
                  (colorChange && birth == '') ||
                  (colorChange && birth.length < 10)
                    ? red
                    : '#0b3a7e'
                }
              />
              <TextInputStyle
                value={birth}
                maxLength={10}
                onChangeText={(birth) =>
                  setBirth(birthMask(birth, colorChange))
                }
                onFocus={() => setFocus(3)}
                placeholder={'Data de nascimento'}
                placeholderTextColor={colorChange ? red : grey}
              />
            </InputView>
          </View>
        )}
        {isLoading && (
          <View>
            <ActivityIndicator size="large" color="#0e4b97" />
          </View>
        )}

        <View>
          <ButtonGradient
            colors={['#041b4e', '#093575', '#0e4b97']}
            useAngle={true}
            angle={100}
            angleCenter={{x: 0.5, y: 0.5}}>
            <ConfirmButton
              onPress={() => {
                if (!colorChange) {
                  postPasswordReset(cpf, birth, password, token).then(
                    (data) => {
                      setSnackText(data);
                      data !== 1 ? Display() : {};
                    },
                  );
                } else {
                  setSnackText('Preencha os campos corretamente');
                  Display();
                }
              }}>
              <ButtonText>Enviar</ButtonText>
            </ConfirmButton>
          </ButtonGradient>
        </View>

        <View>
          <TextCenter>
            <GreyText>Não tem cadastro?</GreyText>
          </TextCenter>

          <ConfirmButton
            button2
            onPress={() => navigation.navigate('Register')}>
            <ButtonText black active>
              Criar minha conta
            </ButtonText>
          </ConfirmButton>

          <SnackBar
            showSnack={displayed}
            toggle={closeModal}
            text={snackText}
          />
        </View>
      </Body>
    </>
  );
}
