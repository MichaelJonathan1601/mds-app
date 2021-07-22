import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

export const HeaderGradient = styled(LinearGradient)`
  height: 30%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 24px;
  font-family: 'geoDemibold';
  ${(props) =>
    props.desc &&
    `
    font-size: 16px;
    font-family: 'geoRegular';
    `}
`;

export const Header = styled.View`
  flex: 1;
  justify-content: center;
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
`;

export const Body = styled.View`
  flex: 1;
  padding: 7%;
`;

export const TextView = styled.View`
  padding-left: 7%;
  flex: 1;
`;

export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileButton = styled.TouchableOpacity`
  padding-left: 20px;
`;
