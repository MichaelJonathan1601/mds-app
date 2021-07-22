import React, {useRef} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home_Screen from '../../screens/AppScreens/Home';

import feedback from '../../screens/AppScreens/Feedback';

import oferta from '../../screens/AppScreens/Oferta';

import qrcode from '../../screens/AppScreens/QRcode';


import agendamentoRenew from '../../screens/AppScreens/AgendamentoRenovação';

const Stack = createStackNavigator();

const Home = ({navigation}) => {
  return (
    <Stack.Navigator headerMode="none" barStyle="dark-content">
      <Stack.Screen name="Home_Screen" component={Home_Screen} />
      <Stack.Screen name="Feedback" component={feedback} />
      <Stack.Screen name="Oferta MDS" component={oferta} />
      <Stack.Screen name="Promoções" component={qrcode} />    
      <Stack.Screen name="Agendamento_Renovação" component={agendamentoRenew} />
    </Stack.Navigator>
  );
};

export default Home;
