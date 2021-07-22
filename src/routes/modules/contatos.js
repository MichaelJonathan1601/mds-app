import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Contatos_Screen from '../../screens/AppScreens/Contatos';

import agendamento from '../../screens/AppScreens/Agendamento';

import agendamentoSi from '../../screens/AppScreens/AgendamentoSinistro';
import agendamentoRenew from '../../screens/AppScreens/AgendamentoRenovação';
import agendamentoSeg from '../../screens/AppScreens/AgendamentoSeguroNovo';

const Stack = createStackNavigator();

const Contatos = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Contatos_Screen" component={Contatos_Screen} />
      <Stack.Screen name="Agendamento_Outros" component={agendamento} />
      <Stack.Screen name="Agendamento_Sinistro" component={agendamentoSi} />
      <Stack.Screen name="Agendamento_Renovação" component={agendamentoRenew} />
      <Stack.Screen name="Agendamento_Seguro" component={agendamentoSeg} />
    </Stack.Navigator>
  );
};

export default Contatos;
