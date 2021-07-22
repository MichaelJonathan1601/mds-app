import styled from 'styled-components';

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
export const TextInputStyle = styled.Text`
  font-family: 'geoLight';
  font-size: 16px;
  border-bottom-color: #9f9e9e;
  border-bottom-width: 1px;
  padding-left: 3%;
`;

export const DescriptionStyle = styled.TextInput`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #f2f2f2;
  font-family: 'geoLight';
  font-size: 16px;
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

export const ConfirmButton = styled.TouchableOpacity`
  font-family: 'geoDemibold';
  padding: 7%;
  margin-bottom:7%;
  align-items: center;
  border-radius: 5px;
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
