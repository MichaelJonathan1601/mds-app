import styled from 'styled-components';

export const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 7%;

  ${(props) =>
    props.page2 &&
    `
    padding-top:9%;
    justify-content: space-between;
    `}
`;
