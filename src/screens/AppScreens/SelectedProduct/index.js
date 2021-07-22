import React, {useEffect, useState} from 'react';
import {StatusBar, ActivityIndicator, ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import WebView from 'react-native-webview';

import {Body, ButtonText, ConfirmButton} from './styles';

import HeaderGradient from '../../../shared/components/HeaderGradient/index';
import SnackBar from '../../../shared/components/SnackBar';

import {getProductDetail} from '../../../services/products';
import {postProductAccount} from '../../../services/products';

var timer;

export default function SelectedProduct({route, navigation}) {
  const {userPolicies} = useSelector((state) => ({...state.policies}));
  const {userAccountId} = useSelector((state) => ({...state.login}));

  const {token} = useSelector((state) => ({...state.login}));
  const {tag} = route.params;
  const {name} = route.params;
  const {productId} = route.params;

  const [productText, setProductText] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const [displayed, setDisplayed] = useState(false);

  const [snackText, setSnackText] = useState('Ocorreu um erro tente novamente');

  const closeModal = () => {
    //setDisplayed(false);
    //clearTimeout(timer);
  };

  const Display = () => {
    setDisplayed(true);
    timer = setTimeout(() => {
      setDisplayed(false);
      navigation.goBack();
    }, 3000);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  }, []);

  useEffect(() => {
    getProductDetail(tag, token).then((data) => {
      setProductText(data);
    });
  }, []);

  function ProductsMap() {
    try {
      return (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: 'space-between',
            }}>
            <WebView
              style={{flex: 1}}
              originWhitelist={['*']}
              source={{html: productText}}
              scalesPageToFit={false}
              // injectedJavaScript={
              //   ' function hideHeaderToggle() {var x = document.getElementsByTagName("p");for (var i = 0; i < x.length; i++) {x[i].style.color = "#051f54"}}; hideHeaderToggle();'
              // }
            />
            <ConfirmButton
              disabled={disableButton}
              onPress={() => {
                setDisableButton(true);
                postProductAccount(productId, userAccountId, token).then(
                  (data) => {
                    setSnackText('Produto Solicitado!');
                    Display();
                  },
                );
              }}>
              <ButtonText>Solicitar Cotação</ButtonText>
            </ConfirmButton>
          </ScrollView>
          <SnackBar
            showSnack={displayed}
            toggle={closeModal}
            text={snackText}
          />
        </>
      );
    } catch (e) {
      console.log(e);
      return (
        <>
          <ActivityIndicator size="large" color="#0e4b97" />
        </>
      );
    }
  }

  return (
    <>
      <HeaderGradient page2 onBackPress={() => navigation.goBack()} name={name} />

      <Body>{ProductsMap()}</Body>
    </>
  );
}
