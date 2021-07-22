import React, {useEffect} from 'react';

import {StatusBar, ScrollView, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {useNavigation} from '@react-navigation/native';

import {Body, Text, TextStyle, PaddingView} from './styles';

import ButtonList from '../../../shared/components/ButtonList/index';

import HeaderGradient from '../../../shared/components/HeaderGradient/index';

import {getProducts} from '../../../services/products';

export default function Produtos() {
  const navigation = useNavigation();
  const {token} = useSelector((state) => ({...state.login}));
  const {appProducts} = useSelector((state) => ({...state.products}));

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });
  useEffect(() => {
    if (appProducts == null) {
      getProducts(token, dispatch);
    }
  }, []);

  function ProductsMap() {
    try {
      return (
        <>
          <ButtonList
            selectedP={appProducts[0]}
            first
            name={appProducts[0].name}
          />

          <ButtonList selectedP={appProducts[1]} name={appProducts[1].name} />
          <ButtonList selectedP={appProducts[2]} name={appProducts[2].name} />
          <ButtonList selectedP={appProducts[3]} name={appProducts[3].name} />
          <ButtonList selectedP={appProducts[4]} name={appProducts[4].name} />
          <ButtonList selectedP={appProducts[5]} name={appProducts[5].name} />
          <ButtonList selectedP={appProducts[6]} name={appProducts[6].name} />
          <ButtonList selectedP={appProducts[7]} name={appProducts[7].name} />
          <ButtonList selectedP={appProducts[8]} name={appProducts[8].name} />
          <ButtonList selectedP={appProducts[9]} name={appProducts[9].name} />
          <ButtonList selectedP={appProducts[10]} name={appProducts[10].name} />
          <ButtonList selectedP={appProducts[11]} name={appProducts[11].name} />
          <ButtonList selectedP={appProducts[12]} name={appProducts[12].name} />
          <ButtonList selectedP={appProducts[13]} name={appProducts[13].name} />
        </>
      );
    } catch (e) {
      return (
        <>
          <ActivityIndicator size="large" color="#0e4b97" />
        </>
      );
    }
  }

  return (
    <>
      <HeaderGradient name="Produtos" />

      <Body>
        <ScrollView showsVerticalScrollIndicator={false}>
          <PaddingView>
            <TextStyle h1>Conheça todos os produtos MDS</TextStyle>
          </PaddingView>
          {ProductsMap()}
        </ScrollView>
      </Body>
    </>
  );
}
