import React, {useState, useEffect} from 'react';
import {View, StatusBar, ActivityIndicator} from 'react-native';
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
  ImageHeader,
} from './styles';

import Lock from 'react-native-vector-icons/dist/SimpleLineIcons';
import UserIcon from 'react-native-vector-icons/dist/Ionicons';

import SnackBar from '../../../shared/components/SnackBar';

import {postLogin} from '../../../services/login';

import {cpfMask} from '../../../shared/utils/masks';

var timer;

export default function Login() {
  const navigation = useNavigation();
  const [focus, setFocus] = useState(0);
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('');

  
  const [pswShow, setPswShow] = useState(false);

  const [colorChange, setColorChange] = useState(false);
  const [snackText, setSnackText] = useState('Não foi possível fazer login');
  const [displayed, setDisplayed] = useState(false);
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
  function inputViewRed2(data) {
    if (colorChange && data == '') {
      return {borderBottomColor: red};
    } else {
      return {borderBottomColor: 'black'};
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <ImageHeader source={require('../../../assets/img/header.png')} />
      </Header>

      <Body>
        {!isLoading && (
          <View>
            <InputView style={[inputViewFocus(1), inputViewRed2(cpf)]}>
              <UserIcon
                name="person-outline"
                size={30}
                color={colorChange && cpf == '' ? red : 'black'}
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
            <InputView style={[inputViewFocus(2), inputViewRed2(password)]}>
              <Lock
                name="lock"
                size={30}
                color={colorChange && password == '' ? red : '#0b3a7e'}
              />
              <TextInputStyle
                onChangeText={setPassword}
                onFocus={() => setFocus(2)}
                secureTextEntry={pswShow}
                placeholder={'Senha'}
                placeholderTextColor={colorChange ? red : grey}
              />
              <UserIcon
              name={pswShow? "eye-outline" : "eye-off-outline"}
              onPress={()=>setPswShow(!pswShow)}
              size={30}
              color={colorChange && password == '' ? red : '#0b3a7e'}
              style={{position: 'absolute',right:10,top:10}}
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
                postLogin(cpf, password, dispatch).then((data) => {
                  setSnackText(data);
                  data !== 1 ? Display() : {};
                });
              }}>
              <ButtonText>Entrar</ButtonText>
            </ConfirmButton>
          </ButtonGradient>
          <TextCenter>
            <LinkText onPress={() => navigation.navigate('pswChange')}>
              Esqueci minha senha
            </LinkText>
          </TextCenter>
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
