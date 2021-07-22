import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const GradientBody = styled(LinearGradient)`
  height: 100%;
`;

export const RegisterConfirmed = styled.View`
  height: 100%;
  padding: 0 7% 0 7%;
`;

export const Header = styled.View`
  padding: 10% 7% 10% 7%;
  height: 30%;
  justify-content: space-around;
`;
export const ButtonView = styled.View`
  padding-bottom: 10%;
  width: 100%;
  justify-content: flex-end;
`;

export const TextView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageConfirmed = styled.Image`
  height: 14%;
  resize-mode: contain;
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

export const ButtonText = styled.Text`
  color: #041b4e;
  font-family: 'geoDemibold';
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: white;
  width: 100%;
  font-family: 'geoDemibold';
  padding: 7%;
  align-items: center;
  border-radius: 5px;
`;
export const InputView = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`;

export const NumberInput = styled.TextInput`
  font-family: 'geoThin';
  color: white;
  font-size: 50px;
  border-bottom-color: white;
  border-bottom-width: 1px;
`;
