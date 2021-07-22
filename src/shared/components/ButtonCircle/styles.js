import styled from 'styled-components';

import {Dimensions} from 'react-native';

export const ImageButton = styled.Image`
  resize-mode: contain;
  width: 30px;
  height: 30px;
`;

export const CenterView = styled.View`
  flex: 1;
  align-items: center;
`;

export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 7%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: white;
`;

export const Circle = styled.TouchableOpacity`
  elevation: 6;

  shadow-color: #000;
  shadow-offset: 0 3px;
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  background-color: white;
  padding: 25%;
  align-items: center;
  border-radius: 100px;
`;

export const ButtonText = styled.Text`
  padding-top: 5%;
  color: #041b4e;
  font-family: 'geoRegular';
  font-size: 16px;
`;
