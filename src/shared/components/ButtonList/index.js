import React from 'react';

import {TextStyle, ButtonStyle} from './styles';

import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function ButtonList({first, name, exit, selectedP, page}) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <>
      <ButtonStyle
        first={first}
        onPress={() => {
          exit &&
            dispatch({
              type: 'USER_LOGOFF',
            });
          page && navigation.navigate(page);
          selectedP &&
            navigation.navigate('productSelect', {
              name: selectedP.name,
              tag: selectedP.tag,
              productId: selectedP.productId,
            });
        }}>
        <TextStyle grey>{name}</TextStyle>
        <Entypo name="chevron-thin-right" size={14} color="#041b4e" />
      </ButtonStyle>
    </>
  );
}
