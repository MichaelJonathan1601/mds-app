import React from 'react';

import {CenterView, ImageButton, Circle, ButtonText} from './styles';
import {getPoints} from '../../../services/pointsDetails';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function ButtonCircle({img, text, page, icon}) {
  const navigation = useNavigation();
  return (
    <>
      <CenterView>
        <Circle
          onPress={() => {
            if (page) {
              navigation.navigate(page);
            }
          }}>
          {img && <ImageButton source={img} />}

          {icon && <Icon name={icon} color={'#041b4e'} size={30} />}
        </Circle>
        <ButtonText>{text}</ButtonText>
      </CenterView>
    </>
  );
}
