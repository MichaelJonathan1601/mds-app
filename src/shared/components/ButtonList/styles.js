import styled from 'styled-components';

export const ButtonStyle = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding-horizontal: 1%;
  padding-vertical: 7%;
  border-bottom-color: #9f9e9e;
  border-bottom-width: 1px;

  ${(props) =>
    props.first &&
    `
    border-top-color: #9f9e9e;
    border-top-width: 1px;
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
`;
