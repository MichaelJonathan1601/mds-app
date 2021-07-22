import React, {useEffect} from 'react';
import {ScrollView, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import ButtonList from '../../../shared/components/ButtonList/index';

import {
  HeaderText,
  Header,
  HeaderGradient,
  Body,
  TextStyle,
  RowView,
  TextView,
  ProfileButton,
} from './styles';

export default function Perfil() {
  const navigation = useNavigation();
  const {userInfo} = useSelector((state) => ({...state.login}));

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  return (
    <>
      <HeaderGradient
        colors={['#041b4e', '#093575', '#0e4b97']}
        useAngle={true}
        angle={100}
        angleCenter={{x: 0.5, y: 0.5}}>
        <Header>
          <RowView>
            <Entypo name="emoji-flirt" size={40} color="white" />
            <TextView>
              <RowView>
                <HeaderText>Perfil</HeaderText>
                <ProfileButton onPress={() => navigation.navigate('meusDados')}>
                  <FontAwesome5 name="edit" size={15} color="#00a8ff" />
                </ProfileButton>
              </RowView>
              <HeaderText desc>{userInfo.name}</HeaderText>
            </TextView>
          </RowView>
        </Header>
      </HeaderGradient>
      <Body>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ButtonList first name={'Meus Dados'} page={'meusDados'} />
          <ButtonList name={'Termos'} page={'Termos'} />
          <ButtonList name={'Promoções'} page={'Promoções'} />
          <ButtonList name={'Feedback'} page={'Feedback'} />
          <ButtonList name={'Oferta MDS'} page={'Oferta MDS'} />

          <ButtonList name={'Sair'} exit />
        </ScrollView>
      </Body>
    </>
  );
}
