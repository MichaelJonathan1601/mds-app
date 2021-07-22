import styled from 'styled-components';

export const Body = styled.View`
  background-color: white;
  flex: 1;
`;

export const PaddingView = styled.View`
  padding: 7%;
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
    props.squareButton &&
    `
    font-family: 'geoDemibold';
    `}
`;

export const ButtonSquare = styled.TouchableOpacity`
  flex: 1;
  margin-right: 7%;
  margin-bottom: 7%;
  padding-top: 4%;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;

  background-color: white;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const ButtonView = styled.View`
  margin-left: 7%;
  height: 20%;
  flex-direction: row;
`;

export const ImageStyle = styled.Image`
  resize-mode: contain;
  width: 30px;
  height: 30px;
`;
