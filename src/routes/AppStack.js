import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);

import Apolices from './modules/apolices';
import Contatos from './modules/contatos';
import Home from './modules/home';
import Perfil from './modules/perfil';
import Produtos from './modules/produtos';

const AppStack = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#093270',
        inactiveTintColor: '#a2a2b8',
        labelStyle: {fontFamily: 'geoDemibold', fontSize: 13},
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="inicio" color={color} size={20} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Apólices"
        options={{
          tabBarLabel: 'Apólices',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="apolices" color={color} size={20} />
          ),
        }}
        component={Apolices}
      />
      <Tab.Screen
        name="Produtos"
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="produtos" color={color} size={16} />
          ),
        }}
        component={Produtos}
      />
      <Tab.Screen
        name="Contatos"
        options={{
          tabBarLabel: 'Contatos',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="contatos" color={color} size={20} />
          ),
        }}
        component={Contatos}
      />
      <Tab.Screen
        name="Perfil"
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({color, size}) => (
            <CustomIcon name="perfil" color={color} size={20} />
          ),
        }}
        component={Perfil}
      />
    </Tab.Navigator>
  );
};
export default AppStack;
