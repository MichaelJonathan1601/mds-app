import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Product_Screen from '../../screens/AppScreens/Produtos';

import productSelect from '../../screens/AppScreens/SelectedProduct';

const Stack = createStackNavigator();

const Produtos = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Product_Screen" component={Product_Screen} />
      <Stack.Screen name="productSelect" component={productSelect} />
    </Stack.Navigator>
  );
};

export default Produtos;
