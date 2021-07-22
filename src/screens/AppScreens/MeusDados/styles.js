import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions} from 'react-native';

export const Body = styled.View`
  flex: 1;
  background-color: white;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: #041b4e;
  font-family: 'geoRegular';
  font-size: 16px;
  text-align: center;

  ${(props) =>
    props.white &&
    `
    color: white;
    align-self: center;
    `}
`;

export const ButtonVerify = styled.TouchableOpacity`
  width: 45%;
  align-self: flex-end;
  margin-top: 10px;
  padding: 5px 8px 5px 8px;
  background-color: #0b3a7e;
  border-radius: 25px;
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
export const CenterView = styled.View`
  align-items: flex-end;
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
  ${(props) =>
    props.title &&
    ` 
    padding-left: 40px;
    `};
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OuterView = styled.View`
  padding-vertical: 3%;
`;

export const TextInputStyle = styled.TextInput`
  flex: 1;
  font-family: 'geoLight';
  height: 40px;
  margin-left: 4%;
  font-size: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #7c7b7b;

  ${(props) =>
    props.noIcon &&
    ` 
    margin-left: 0;
    `};
  ${(props) =>
    props.largeINPUT &&
    ` 
    margin-left: 0;
    flex: 1.5;
    `};
`;
