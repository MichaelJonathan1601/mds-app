import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {StatusBar} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {
  TextStyle,
  PaddingView,
  ButtonView,
  ButtonSquare,
  ImageStyle,
  Body,
} from './styles';
import HeaderGradient from '../../../shared/components/HeaderGradient/index';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

import {postWhatsApp} from '../../../services/whatsapp';

import SnackBar from '../../../shared/components/SnackBar';

var timer;
export default function Contatos() {
  const {userAccountId} = useSelector((state) => ({...state.login}));
  const {token} = useSelector((state) => ({...state.login}));

  const navigation = useNavigation();

  const [displayed, setDisplayed] = useState(false);
  const [snackText, setSnackText] = useState(
    'Mensagem enviada para seu Whatsapp!',
  );
  const closeModal = () => {
    setDisplayed(false);
    clearTimeout(timer);
  };
  const Display = () => {
    setDisplayed(true);
    timer = setTimeout(() => setDisplayed(false), 3000);
  };

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  return (
    <>
      <Body>
        <HeaderGradient name="Contatos" />
        <PaddingView>
          <TextStyle h1>O que você procura?</TextStyle>
        </PaddingView>
        <ButtonView>
          <ButtonSquare
            onPress={() => {
              navigation.navigate('Agendamento_Renovação');
            }}>
            <ImageStyle source={require('../../../assets/img/renew.png')} />
            <TextStyle squareButton>Renovação</TextStyle>
          </ButtonSquare>
          <ButtonSquare onPress={() => navigation.navigate('Produtos')}>
            <ImageStyle source={require('../../../assets/img/add.png')} />
            <TextStyle squareButton>Novos Produtos</TextStyle>
          </ButtonSquare>
        </ButtonView>
        <ButtonView>
          <ButtonSquare
            onPress={() => {
              navigation.navigate('Agendamento_Sinistro');
            }}>
            <ImageStyle source={require('../../../assets/img/sinistros.png')} />
            <TextStyle squareButton>Informar Sinistro</TextStyle>
          </ButtonSquare>
          <ButtonSquare
            onPress={() => {
              navigation.navigate('Agendamento_Outros');
            }}>
            <ImageStyle source={require('../../../assets/img/question.png')} />
            <TextStyle squareButton>Tirar Dúvidas</TextStyle>
          </ButtonSquare>
        </ButtonView>
        <ButtonView>
          <ButtonSquare
            onPress={() => {
              navigation.navigate('Agendamento_Seguro');
            }}>
            <ImageStyle source={require('../../../assets/img/fix.png')} />
            <TextStyle squareButton>Seguro Novo</TextStyle>
          </ButtonSquare>
          <ButtonSquare
            onPress={() => {
              postWhatsApp(userAccountId, token).then((data) => {
                data == 1
                  ? setSnackText('Mensagem enviada para seu Whatsapp!')
                  : setSnackText('Não foi possível entrar em contato!');
                Display();
              });
            }}>
            {/* <ImageStyle source={require('../../../assets/img/outros.png')} /> */}
            <Icon name="whatsapp" color={'#051f54'} size={40} />
            <TextStyle squareButton>WhatsApp</TextStyle>
          </ButtonSquare>
        </ButtonView>
        <SnackBar showSnack={displayed} toggle={closeModal} text={snackText} />
      </Body>
    </>
  );
}
