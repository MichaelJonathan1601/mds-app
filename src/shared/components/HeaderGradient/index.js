import React from 'react';

import {Gradient, HeaderText, Header} from './styles';

import {TouchableOpacity} from 'react-native';

import Entypo from 'react-native-vector-icons/dist/Entypo';

export default function HeaderGradient({name, page2, onBackPress}) {
  return (
    <Gradient
      colors={['#041b4e', '#093575', '#0e4b97']}
      useAngle={true}
      angle={100}
      angleCenter={{x: 0.5, y: 0.5}}>
      <Header page2={page2}>
        {page2 && (
          <TouchableOpacity onPress={onBackPress}>
            <Entypo name="chevron-thin-left" size={30} color="white" />
          </TouchableOpacity>
        )}
        <HeaderText>{name}</HeaderText>
      </Header>
    </Gradient>
  );
}
