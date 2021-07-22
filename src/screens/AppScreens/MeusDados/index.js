import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {StatusBar, ScrollView, View, ActivityIndicator} from 'react-native';

import {
  Body,
  TextStyle,
  CenterView,
  Circle,
  TextInputStyle,
  RowView,
  ButtonVerify,
  ButtonText,
  OuterView,
} from './styles';

import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import HeaderGradient from '../../../shared/components/HeaderGradient/index';
import SnackBar from '../../../shared/components/SnackBar';

import {putAccount} from '../../../services/login';

import {
  cpfMask,
  cepMask,
  birthMask,
  celMask,
  phoneStyle,
  dataStyle,
  cpfStyle,
  inputViewRed,
  mailStyle,
} from '../../../shared/utils/masks';

var timer;

export default function MeusDados() {
  const {userInfo} = useSelector((state) => ({...state.login}));

  const {token} = useSelector((state) => ({...state.login}));

  const {userAccountId} = useSelector((state) => ({...state.login}));

  const [enabled, setEnabled] = useState(false);

  const [disableButton, setDisableButton] = useState(false);

  const [name, setName] = useState('');
  const [cpf, setCPF] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const [terms, setTerms] = useState('');

  const [addressId, setAddressId] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [displayed, setDisplayed] = useState(false);
  const [snackText, setSnackText] = useState('Não foi possível fazer login');
  const [colorChange, setColorChange] = useState(false);

  var grey = '#7c7b7b';
  var red = '#ce4257';

  const closeModal = () => {
    // setDisplayed(false);
    // clearTimeout(timer);
  };

  const Display = () => {
    setColorChange(true);
    setDisplayed(true);
    timer = setTimeout(() => {
      setDisplayed(false);
      navigation.pop();
    }, 3000);
  };

  function formatDate(d) {
    let x = new Date(d);

    return (
      ('0' + x.getDate()).slice(-2) +
      '/' +
      ('0' + (x.getMonth() + 1)).slice(-2) +
      '/' +
      x.getFullYear()
    );
  }

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
      setValues();
    });
  }, []);

  function setValues() {
    setName(userInfo.name);
    setCPF(userInfo.cpf);
    setBirth(formatDate(userInfo.birthday));
    setEmail(userInfo.email);
    setPhone(userInfo.phone);
    setCep(userInfo.addresses[0].cep);
    setStreet(userInfo.addresses[0].street);
    setNumber(userInfo.addresses[0].number);
    setNeighborhood(userInfo.addresses[0].neighborhood);
    setCity(userInfo.addresses[0].city);
    setState(userInfo.addresses[0].state);
    setAddressId(userInfo.addresses[0].addressId);
    setTerms(true);
  }

  function checkFields(x) {
    if (x == 1) {
      if (
        name !== '' &&
        cpf !== '' &&
        birth !== '' &&
        phone !== '' &&
        email !== ''
      ) {
        if (
          cpf.length == 14 &&
          birth.length == 10 &&
          phone.length == 15 &&
          email.search('@') !== -1
        ) {
          let addresses = [];

          let address = {
            cep,
            street,
            number,
            complement,
            neighborhood,
            city,
            state,
          };

          addresses.push(address);
          //console.log(addresses);

          setDisableButton(true);

          putAccount(
            userAccountId,
            token,
            addresses,
            name,
            cpf,
            birth,
            email,
            phone,
            terms,
          );
          setSnackText('Dados alterados com sucesso');
          Display();
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
  }

  /////////////////

  function PoliciesMap() {
    try {
      return (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            padding: '7%',
          }}>
          <TextStyle bold>Dados Pessoais </TextStyle>

          <View>
            <OuterView>
              <TextStyle title>Nome </TextStyle>
              <RowView>
                <MaterialCommunityIcons
                  name="account"
                  color={'#a2a2b8'}
                  size={25}
                />

                <TextInputStyle
                  style={inputViewRed(name, colorChange)}
                  editable={enabled}
                  value={name}
                  placeholder="Seu nome"
                  onChangeText={setName}
                  placeholderTextColor={colorChange && name == '' ? red : grey}
                />
              </RowView>
            </OuterView>

            <OuterView>
              <TextStyle title>CPF </TextStyle>
              <RowView>
                <MaterialCommunityIcons
                  name="id-card"
                  color={'#a2a2b8'}
                  size={25}
                />

                <TextInputStyle
                  style={[
                    inputViewRed(cpf, colorChange),
                    cpfStyle(cpf, colorChange),
                  ]}
                  editable={enabled}
                  value={cpf}
                  maxLength={14}
                  keyboardType={'numeric'}
                  onChangeText={(cpf) => setCPF(cpfMask(cpf))}
                  placeholder="CPF"
                  placeholderTextColor={colorChange && cpf == '' ? red : grey}
                />
              </RowView>
            </OuterView>
            <OuterView>
              <TextStyle title>Data de Nascimento </TextStyle>
              <RowView>
                <MaterialCommunityIcons
                  name="calendar"
                  color={'#a2a2b8'}
                  size={25}
                />
                <TextInputStyle
                  editable={enabled}
                  style={[
                    inputViewRed(birth, colorChange),
                    dataStyle(birth, colorChange),
                  ]}
                  value={birth}
                  placeholder="Data de nascimento"
                  maxLength={10}
                  keyboardType={'numeric'}
                  onChangeText={(birth) => setBirth(birthMask(birth))}
                  placeholderTextColor={colorChange && birth == '' ? red : grey}
                />
              </RowView>
            </OuterView>
          </View>
          <TextStyle bold>Contato </TextStyle>
          <View>
            <OuterView>
              <TextStyle title> Email </TextStyle>
              <RowView>
                <MaterialCommunityIcons
                  name="email"
                  color={'#a2a2b8'}
                  size={25}
                />

                <TextInputStyle
                  editable={enabled}
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
              </RowView>
              <ButtonVerify>
                <ButtonText white>VERIFICAR E-MAIL</ButtonText>
              </ButtonVerify>
            </OuterView>
            <OuterView>
              <TextStyle title editable={enabled}>
                Telefone
              </TextStyle>
              <RowView>
                <MaterialCommunityIcons
                  name="cellphone"
                  color={'#a2a2b8'}
                  size={25}
                />
                <TextInputStyle
                  editable={enabled}
                  style={[inputViewRed(phone), phoneStyle(phone)]}
                  value={phone}
                  placeholder="Celular"
                  maxLength={15}
                  onChangeText={(phone) => setPhone(celMask(phone))}
                  keyboardType={'numeric'}
                  placeholderTextColor={colorChange && phone == '' ? red : grey}
                />
              </RowView>
              <ButtonVerify>
                <ButtonText white>VERIFICAR CELULAR</ButtonText>
              </ButtonVerify>
            </OuterView>
            <TextStyle bold>Endereço </TextStyle>

            <View>
              <OuterView>
                <RowView>
                  <MaterialCommunityIcons
                    name="home"
                    color={'#a2a2b8'}
                    size={25}
                  />

                  <TextInputStyle
                    editable={enabled}
                    placeholder="CEP"
                    maxLength={10}
                    value={cep}
                    onChangeText={(cep) => setCep(cepMask(cep))}
                  />
                </RowView>
              </OuterView>
              <OuterView>
                <RowView>
                  <TextInputStyle
                    noIcon
                    editable={enabled}
                    value={street}
                    placeholder="Endereço"
                    onChangeText={setStreet}
                  />
                </RowView>
              </OuterView>
              <OuterView>
                <RowView>
                  <TextInputStyle
                    largeINPUT
                    editable={enabled}
                    value={complement}
                    placeholder="Complemento"
                    onChangeText={setComplement}
                  />
                  <TextInputStyle
                    editable={enabled}
                    value={number}
                    placeholder="Número"
                    onChangeText={setNumber}
                    keyboardType="numeric"
                  />
                </RowView>
              </OuterView>
              <OuterView>
                <RowView>
                  <TextInputStyle
                    noIcon
                    editable={enabled}
                    value={neighborhood}
                    placeholder="Bairro"
                    onChangeText={setNeighborhood}
                  />
                </RowView>
              </OuterView>
              <OuterView>
                <RowView>
                  <TextInputStyle
                    largeINPUT
                    editable={enabled}
                    value={city}
                    placeholder="Cidade"
                    onChangeText={setCity}
                  />
                  <TextInputStyle
                    editable={enabled}
                    value={state}
                    placeholder="Estado"
                    onChangeText={setState}
                  />
                </RowView>
              </OuterView>
            </View>
          </View>
          {!enabled && (
            <CenterView>
              <Circle onPress={() => setEnabled(true)}>
                <MaterialCommunityIcons
                  name="pencil"
                  size={35}
                  color={'#0b3a7e'}
                />
              </Circle>
            </CenterView>
          )}

          {enabled && (
            <CenterView>
              <Circle disabled={disableButton} onPress={() => checkFields(1)}>
                <MaterialCommunityIcons
                  name="send"
                  size={35}
                  color={'#0b3a7e'}
                />
              </Circle>
            </CenterView>
          )}
        </ScrollView>
      );
    } catch (e) {
      console.log(e);
      return (
        <View style={{paddingTop: 50}}>
          <ActivityIndicator size="large" color="#0e4b97" />
        </View>
      );
    }
  }

  return (
    <>
      <HeaderGradient
        page2
        onBackPress={() => navigation.goBack()}
        name={'Meus Dados'}
      />
      <SnackBar showSnack={displayed} toggle={closeModal} text={snackText} />

      <Body>{PoliciesMap()}</Body>
    </>
  );
}
