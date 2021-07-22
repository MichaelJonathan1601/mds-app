//não utilizado

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {StatusBar, View} from 'react-native';

import {
  Body,
  ViewRectangle,
  ButtonText,
  TextStyle,
  RowView,
  BlueView,
  ImageStyle,
  CarouselStyle,
  CarouselButton,
  RectangleText,
} from './styles';
import Carousel from '../../../shared/components/Carousel';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);
import Entypo from 'react-native-vector-icons/dist/Entypo';

import HeaderGradient from '../../../shared/components/HeaderGradient/index';

export default function Apolices2() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  return (
    <>
      <HeaderGradient
        page2
        onBackPress={() => navigation.goBack()}
        name={'Seguro Auto'}
      />

      <BlueView border></BlueView>
      <BlueView>
        <RowView renew>
          <View>
            <TextStyle white>
              Próxima Renovação -{' '}
              <TextStyle white bold>
                22/06/2020
              </TextStyle>
            </TextStyle>
            <TextStyle sub>Renovar</TextStyle>
          </View>

          <Entypo name="chevron-thin-right" size={14} color="white" />
        </RowView>
      </BlueView>

      <Body>
        <ViewRectangle
          onPress={() => {
            navigation.navigate('veiculo');
          }}>
          <RowView>
            <ImageStyle source={require('../../../assets/img/tow.png')} />
            <RectangleText>
              <TextStyle h1>Consultar cobertura</TextStyle>
              <TextStyle grey>Guincho, auto socorro e mais</TextStyle>
            </RectangleText>
          </RowView>
        </ViewRectangle>

        <ViewRectangle>
          <RowView>
            <ImageStyle source={require('../../../assets/img/fix.png')} />
            <RectangleText>
              <TextStyle h1>Cuide do seu auto</TextStyle>
              <TextStyle grey>Rede de descontos especiais </TextStyle>
            </RectangleText>
          </RowView>
        </ViewRectangle>
      </Body>

      <CarouselStyle page2>
        <Carousel>
          <CarouselButton left activeOpacity={1}>
            <CustomIcon name="apolices" color={'#051f54'} size={50} />
            <ButtonText>Minha Apólice</ButtonText>
          </CarouselButton>
          <CarouselButton activeOpacity={1}>
            <CustomIcon name="contatos" color={'#051f54'} size={50} />
            <ButtonText>Contatos</ButtonText>
          </CarouselButton>
        </Carousel>
      </CarouselStyle>
    </>
  );
}
