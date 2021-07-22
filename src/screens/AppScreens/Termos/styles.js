import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {Dimensions} from 'react-native';

export const Body = styled.View`
  flex: 1;
  padding: 4%;
  background-color: white;
`;

export const ButtonText = styled.Text`
  color: #041b4e;
  font-family: 'geoRegular';
  font-size: 16px;
`;

export const TextStyle = styled.Text`
  margin-vertical:10px;
  /* text-align:justify; */
  line-height:25px;
  font-family: 'geoLight';
  font-size: 16px;
  color: #051f54;
    ${(props) =>
      props.grey &&
      `
    font-family: 'geoLight';
    color: #7c7b7b;
    `}
    ${(props) =>
      props.h1 &&
      `
    font-size: 18px;
    font-family: 'geoRegular';
    `}
    ${(props) =>
      props.white &&
      ` 
    color: white;
    font-size: 18px;
    font-family: 'geoThin';
    `}
    ${(props) =>
      props.bold &&
      ` 
    font-family: 'geoDemibold';
    `}
    ${(props) =>
      props.sub &&
      ` 
    font-size:17px;
    font-family: 'geoRegular';
    text-decoration: underline;
    `}
    ${(props) =>
      props.mini &&
      ` 
      font-family: 'geoLight';
      font-style: italic
    `}
`;
