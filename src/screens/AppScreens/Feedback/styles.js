import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {Dimensions} from 'react-native';

export const Body = styled.View`
  flex: 1;
  padding-horizontal: 7%;
  background-color: white;
`;

export const ButtonText = styled.Text`
  color: #041b4e;
  font-family: 'geoRegular';
  font-size: 16px;
`;

export const ViewStyle = styled.View`
  align-items: center;

  ${(props) =>
    props.rowView &&
    `
    height:30%;
    flex-direction: row;
    `}
  ${(props) =>
    props.justRight &&
    `
    width:50%;
    height:100%;
    justify-content: space-evenly;
    align-items: flex-end;
    `}

${(props) =>
  props.star &&
  `
    flex-direction: row;
    `}
  ${(props) =>
    props.justLeft &&
    ` 
    height:100%;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 50%;
    `}


`;

export const PaddingView = styled.View`
  margin: 7%;

  ${(props) =>
    props.up &&
    `
    margin-bottom: 0;
    `}

  ${(props) =>
    props.down &&
    `
    margin-top: 0;
    `}
`;

export const RectangleText = styled.View`
  justify-content: space-around;
  padding-left: 14px;
`;

export const TextStyle = styled.Text`
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
    font-family: 'geoRegular';
    text-decoration: underline;
    `};
`;

export const TextInputStyle = styled.TextInput`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-family: 'geoLight';
  font-size: 16px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  font-family: 'geoDemibold';
  padding: 7%;
  align-items: center;
  border-radius: 5px;
  margin-bottom:7%;
  background-color: #f2f2f2;

  ${(props) =>
    props.button2 &&
    `
    font-family: 'geoDemibold';
    border: 1px solid #9f9e9e;
    padding: 7%;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 3%;
    `}
`;
