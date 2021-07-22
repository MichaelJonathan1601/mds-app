import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {Dimensions} from 'react-native';

export const Body = styled.View`
  flex: 1;
  padding: 7%;
  justify-content: space-between;
  background-color: white;
`;

export const CenterView = styled.View`
  align-items: flex-end;
`;

export const Circle = styled.TouchableOpacity`
  elevation: 6;

  shadow-color: #000;
  shadow-offset: 0 3px;
  shadow-opacity: 0.27;
  shadow-radius: 4.65px;
  background-color: white;
  padding: ${((Dimensions.get('screen').width * 5) / 100).toFixed(0)}px;
  align-items: center;
  border-radius: 50px;
`;

export const HeaderGradient2 = styled(LinearGradient)`
  height: 18%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 24px;
  font-family: 'geoDemibold';
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
  padding: 0 7% 0 7%;
  width: 100%;
  font-family: 'geoLight';
  font-size: 16px;
`;

export const LinkText = styled.Text`
  font-family: 'geoLight';
  color: #051f54;
  text-decoration-line: underline;
`;
