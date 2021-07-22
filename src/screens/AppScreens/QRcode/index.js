import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {StatusBar, View, TouchableOpacity} from 'react-native';

import {Body, Circle, TextStyle, CenterView, PaddingView} from './styles';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import HeaderGradient from '../../../shared/components/HeaderGradient/index';
import {postQrCode} from '../../../services/qrcode';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default function QRcode() {
  const {userAccountId} = useSelector((state) => ({...state.login}));
  //const {userPolicies} = useSelector((state) => ({...state.policies}));
  const {token} = useSelector((state) => ({...state.login}));

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [qrCode, setQrCode] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  return (
    <>
      {!qrCode && (
        <>
          <HeaderGradient
            page2
            onBackPress={() => navigation.goBack()}
            name={'Qr Code'}
          />
          <Body>
            <View>
              <TextStyle h1>Utilize Nossos QR Codes!{'\n'}</TextStyle>
              <TextStyle>
                Ao utilizar Qr Codes da MDS, você ganhará diversos tipos de
                descontos, sejam eles na renovação do seu seguro, ao adquirir um
                produto novo ou até mesmo vantagens com um de nossos parceiros.
              </TextStyle>
            </View>

            <CenterView>
              <Circle onPress={() => setQrCode(true)}>
                <Icon name="ios-qr-code-outline" size={35} color={'#0b3a7e'} />
              </Circle>
            </CenterView>
          </Body>
        </>
      )}
      {qrCode && (
        <>
          <StatusBar barStyle="dark-content" />

          <QRCodeScanner
            showMarker
            markerStyle={{borderColor: 'white', borderRadius: 20}}
            onRead={(e) => {
              console.log(e.data);
              postQrCode(e.data, userAccountId, token);
              navigation.pop();
            }}
          />
          <PaddingView>
            <CenterView>
              <Circle onPress={() => setQrCode(false)}>
                <Icon name="return-up-back" size={35} color={'#0b3a7e'} />
              </Circle>
            </CenterView>
          </PaddingView>
        </>
      )}
    </>
  );
}
