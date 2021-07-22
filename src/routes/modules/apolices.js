import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Apolice_Screen from '../../screens/AppScreens/Apolices';
import apolices2 from '../../screens/AppScreens/Apolices2';
import veiculo from '../../screens/AppScreens/Veiculo';

import productSelect from '../../screens/AppScreens/SelectedProduct';

import agendamentoRenew from '../../screens/AppScreens/AgendamentoRenovação';

const Stack = createStackNavigator();

const Apolices = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Apolice_Screen" component={Apolice_Screen} />
      <Stack.Screen name="apolices2" component={apolices2} />
      <Stack.Screen name="veiculo" component={veiculo} />
      <Stack.Screen name="productSelect" component={productSelect} />
      
      <Stack.Screen name="Agendamento_Renovação" component={agendamentoRenew} />
    </Stack.Navigator>
  );
};

export default Apolices;
