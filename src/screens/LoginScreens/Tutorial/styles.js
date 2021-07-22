import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {Dimensions} from 'react-native';

export const ImageStyle = styled.Image`
  width: 100%;
  height: 100%;

  ${(props) =>
    props.page &&
    `
    resize-mode:contain;
    height:3%;
    
    `};
`;

export const TextView = styled.View`
  align-items: center;
  justify-content: flex-end;
`;

export const LowView = styled.View`
  flex: 0.4;
  justify-content: space-evenly;
`;

export const HeaderGradient = styled(LinearGradient)`
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  flex: 0.6;
`;

export const CarouselStyle = styled.View`
  flex: 1;
  width: 100%;
`;

export const CarouselPage = styled.View`
  width: ${Dimensions.get('screen').width.toFixed(0)}px;
`;

export const ViewButtons = styled.View`
  flex-direction: row;
  height: 25%;
  padding-horizontal: 3.5%;
`;

export const ButtonGradient = styled(LinearGradient)`
  margin-horizontal: 3.5%;
  border-radius: 5px;

  height: 70%;
  justify-content: center;
  flex: 1;
`;

export const ConfirmButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex: 1;

  ${(props) =>
    props.white &&
    `
    margin-horizontal: 3.5%;
    border-radius: 5px;
    height: 70%;
    background-color: white;
    elevation: 4;
    shadow-color: #000;
    shadow-offset: 0 2px;
    shadow-opacity: 0.23;
    shadow-radius: 2.62px;
    `};
`;

export const TextStyle = styled.Text`
  font-family: 'geoLight';
  font-size: 16px;
  color: #5b5b5b;

  ${(props) =>
    props.white &&
    `
    font-family: 'geoDemibold';
    color: white;
    `}
  ${(props) =>
    props.grey &&
    `
    color: #5b5b5b;
    `}
  ${(props) =>
    props.h1 &&
    `
    font-size: 20px;
    font-family: 'geoDemibold';
    margin-bottom: 10px;
    color: black;
    `}

${(props) =>
  props.backButton &&
  `
    font-family: 'geoDemibold';
    color:black;
    `}
`;
