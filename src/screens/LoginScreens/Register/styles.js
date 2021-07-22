import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const Body = styled.View`
  flex: 1;
  justify-content: space-around;
  padding: 0 7% 0 7%;
`;

export const HeaderGradient = styled(LinearGradient)`
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  height: 30%;
`;

export const ButtonGradient = styled(LinearGradient)`
  border-radius: 5px;
  margin: 20px 0 20px 0;
`;
export const TopView = styled.View`
  flex: 1;
  justify-content: space-around;
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

export const TextCenterView = styled.View`
  align-items: center;
`;

export const TextStyle = styled.Text`
  flex: 1;
  flex-wrap: wrap;
  font-family: 'geoRegular';
  font-size: 16px;
  color: #7c7b7b;

  ${(props) =>
    props.policy &&
    `
    
  color: #041b4e;
  font-size: 16px;
  
  text-decoration-line: underline;
    `}
`;

export const TextInputStyle = styled.TextInput`
  font-family: 'geoLight';
  font-size: 16px;
  border-bottom-color: #9f9e9e;
  border-bottom-width: 1px;
  padding-left: 7%;
  margin-top: 3%;
`;

export const BottomView = styled.View`
  flex: 1;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const TermsView = styled.View`
  flex-direction: row;
`;

export const ConfirmButton = styled.TouchableOpacity`
  padding: 20px 20px 20px 20px;
  align-items: center;
  border-radius: 5px;

  ${(props) =>
    props.button2 &&
    `
    border: 1px solid gray;
    padding: 20px 20px 20px 20px;
    align-items: center;
    border-radius: 5px;
    `}
`;

export const ButtonText = styled.Text`
  font-family: 'geoDemibold';
  font-size: 16px;
  color: white;
  ${(props) =>
    props.black &&
    `
      color: black;
    `}
`;
