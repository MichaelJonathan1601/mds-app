import styled from 'styled-components';
import {Dimensions} from 'react-native';

export const ButtonText = styled.Text`
  color: #041b4e;
  font-family: 'geoRegular';
  font-size: 16px;
`;

export const ImageStyle = styled.Image`
  resize-mode: contain;
  width: 60px;
  height: 60px;
`;

export const CarouselButton = styled.TouchableOpacity`
  elevation: 4;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;

  background-color: white;

  align-items: center;
  margin-vertical: 7%;
  margin-horizontal: ${((Dimensions.get('screen').width * 3) / 100).toFixed(
    0,
  )}px;
  width: ${((Dimensions.get('screen').width * 30) / 100).toFixed(0)}px;
  border-radius: 5px;

  ${(props) =>
    props.left &&
    `
    margin-right: ${((Dimensions.get('screen').width * 3) / 100).toFixed(0)}px;
    margin-left: ${((Dimensions.get('screen').width * 7) / 100).toFixed(0)}px;
    width: ${((Dimensions.get('screen').width * 30) / 100).toFixed(0)}px;
    border-radius: 5px;
    `}

  ${(props) =>
    props.right &&
    `
    margin-left: ${((Dimensions.get('screen').width * 3) / 100).toFixed(0)}px;
    margin-right: ${((Dimensions.get('screen').width * 7) / 100).toFixed(0)}px;
    width: ${((Dimensions.get('screen').width * 30) / 100).toFixed(0)}px;
    border-radius: 5px;
    `}
`;

export const CarouselStyle = styled.View`
  width: 100%;
  background-color: #fbfbfb;

  ${(props) =>
    props.page2 &&
    `
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
