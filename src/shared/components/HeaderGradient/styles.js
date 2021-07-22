import styled from 'styled-components';

import LinearGradient from 'react-native-linear-gradient';

export const Gradient = styled(LinearGradient)`
  height: 20%;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 24px;
  font-family: 'geoDemibold';
`;

export const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 7%;

  ${(props) =>
    props.page2 &&
    `
    padding-top:10%;
    justify-content: space-between;
    `}
`;
