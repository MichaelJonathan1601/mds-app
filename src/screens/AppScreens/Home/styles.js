import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

import {Dimensions} from 'react-native';

export const ImageLogo = styled.Image`
  resize-mode: contain;
  height: 30px;
  width: 75px;
`;

export const ImageStyle = styled.Image`
  resize-mode: contain;
  width: 60px;
  height: 60px;
`;

export const TextInputStyle = styled.TextInput`
  padding-horizontal: 10%;
  position: relative;
  width: 100%;
  font-family: 'geoLight';
  font-size: 16px;
  border-radius: 5px;
`;

export const InputView = styled.View`
  border-radius: 5px;

  background-color: white;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const SearchBox = styled.View`
  position: absolute;
  z-index: 2;

  top: 50px;
  width: 100%;
  border-radius: 5px;
  background-color: white;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
`;

export const Header = styled.View`
  z-index: 2;
  background-color: white;
  padding-horizontal: 7%;
  padding-vertical:${((Dimensions.get('screen').width * 10) / 100).toFixed(0)}px;;
  justify-content: flex-end;
`;

export const HeaderTop = styled.View`
  padding-vertical: 7%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowView = styled.View`
  flex-direction: row;
`;

export const CalendarView = styled.View`
  justify-content: space-around;
  padding-left: 14px;
`;

export const CenterView = styled.View`
  flex: 1;
  align-items: center;
`;

export const RenovationView = styled.View`
  flex: 1;
  padding-horizontal: 7%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderText = styled.Text`
  margin-left: 3%;
  color: black;
  font-size: 20px;
  font-family: 'geoRegular';
`;

export const TextCenter = styled.View`
  align-items: center;
`;

export const TextStyle = styled.Text`
  z-index: 100;
  margin-left: 3%;
  color: white;
  font-family: 'geoLight';
  font-size: 20px;

  ${(props) =>
    props.black &&
    `
    color:black;
    `}
`;

export const TextStyleBold = styled.Text`
  font-family: 'geoDemiBold';
`;

export const RenovationGradient = styled(LinearGradient)`
  z-index: -1;
  height: 13%;
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

export const ButtonView = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-horizontal: 7%;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  background-color: white;
`;

export const ButtonText = styled.Text`
  color: #041b4e;
  font-family: 'geoRegular';
  font-size: 16px;
`;

export const CarouselButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-horizontal: ${((Dimensions.get('screen').width * 3) / 100).toFixed(0)}px;
  width: ${((Dimensions.get('screen').width * 30) / 100).toFixed(0)}px;
  border-radius: 5px;

  ${(props) =>
    props.left &&
    `
    margin-right: ${((Dimensions.get('screen').width * 3) / 100).toFixed(0)}px;
    margin-left: ${((Dimensions.get('screen').width * 7) / 100).toFixed(0)}px;
    width: ${((Dimensions.get('screen').width * 30) / 100).toFixed(0)}px;
    border-radius: 5px;
    `}

  ${(props) =>
    props.right &&
    `
    margin-left: ${((Dimensions.get('screen').width * 3) / 100).toFixed(0)}px;
    margin-right: ${((Dimensions.get('screen').width * 7) / 100).toFixed(0)}px;
    width: ${((Dimensions.get('screen').width * 30) / 100).toFixed(0)}px;
    border-radius: 5px;
    `}
`;

export const CarouselStyle = styled.View`
  height: 30%;
  background-color: #f6f6f9;
  width: 100%;
`;
