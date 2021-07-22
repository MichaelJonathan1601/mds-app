import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Perfil_Screen from '../../screens/AppScreens/Perfil';

import meusDados from '../../screens/AppScreens/MeusDados';

import feedback from '../../screens/AppScreens/Feedback';

import oferta from '../../screens/AppScreens/Oferta';

import qrcode from '../../screens/AppScreens/QRcode';
import termos from '../../screens/AppScreens/Termos';

const Stack = createStackNavigator();
const Perfil = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Perfil_Screen" component={Perfil_Screen} />
      <Stack.Screen name="meusDados" component={meusDados} />
      <Stack.Screen name="Feedback" component={feedback} />
      <Stack.Screen name="Oferta MDS" component={oferta} />
      <Stack.Screen name="Promoções" component={qrcode} />
      <Stack.Screen name="Termos" component={termos} />
    </Stack.Navigator>
  );
};

export default Perfil;
