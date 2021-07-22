import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderGradient = styled(LinearGradient)`
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 30%;
`;

export const Body = styled.View`
  background-color: white;
  flex: 1;
  justify-content: space-evenly;
  padding: 0 7% 0 7%;
`;

export const ButtonGradient = styled(LinearGradient)`
  border-radius: 5px;
  margin-vertical: 3%;
`;

export const Header = styled.View`
  padding: 10% 7% 10% 7%;
  height: 100%;
  justify-content: space-around;
`;

export const HeaderText = styled.Text`
  font-family: 'geoDemibold';
  font-size: 20px;
  color: white;
`;

export const HeaderDescription = styled.Text`
  font-family: 'geoLight';
  font-size: 16px;
  color: white;
`;

export const TextCenter = styled.View`
  align-items: center;
`;

export const InputView = styled.View`
  background-color: white;
  border-radius: 5px;
  flex-direction: row;
  margin-vertical: 3%;
  padding-vertical: 3%;
  padding-horizontal: 3%;
  border-bottom-width: 1px;
`;

export const TextInputStyle = styled.TextInput`
  padding-horizontal: 4%;
  padding-vertical: 0;
  width: 100%;
  font-family: 'geoLight';
  font-size: 16px;
`;

export const GreyText = styled.Text`
  font-family: 'geoLight';
  color: #7c7b7b;
`;

export const LinkText = styled.Text`
  font-family: 'geoLight';
  color: #051f54;
  text-decoration-line: underline;
`;

export const ConfirmButton = styled.TouchableOpacity`
  font-family: 'geoDemibold';
  padding: 7%;
  align-items: center;
  border-radius: 5px;

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

export const ButtonText = styled.Text`
  color: white;
  font-family: 'geoDemibold';
  font-size: 16px;
  ${(props) =>
    props.black &&
    `
      font-family: 'geoDemibold';
      color: #7c7b7b;
    `}
`;
