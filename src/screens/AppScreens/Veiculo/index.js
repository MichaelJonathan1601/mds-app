import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {StatusBar, ActivityIndicator, View,ScrollView} from 'react-native';

import {
  Body,
  ButtonText,
  TextStyle,
  RowView,
  BlueView,
  CarouselStyle,
  CarouselButton,
} from './styles';
import Carousel from '../../../shared/components/Carousel';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);
import Entypo from 'react-native-vector-icons/dist/Entypo';
import HeaderGradient from '../../../shared/components/HeaderGradient/index';


import {formatDate} from '../../../shared/utils/masks'

export default function Veiculo() {
  const {selectedPolicie} = useSelector((state) => ({...state.policies}));

  const [coberturas, setCoberturas] = useState(selectedPolicie);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  

  function CoberturasMap() {
    let x = JSON.parse(coberturas.coberturasJson);
    return x.Coberturas.map((item, i) => {
      return (
        <TextStyle key={item.Cobertura}>
          <TextStyle bold>Cobertura:</TextStyle>
          {item.Cobertura}
          {'\n'} {'\n'}
          <TextStyle bold>Valor ISS: </TextStyle>
          {item.ValorIS}
          {'\n'} {'\n'}
          <TextStyle bold>Valor franquia: </TextStyle>
          {item.ValorIS}
        </TextStyle>
      );
    });
  }

 

  function PoliciesMap() {
    try {
      return (
        <>
          <TextStyle>
            <TextStyle bold>Carro:</TextStyle> {coberturas.itemDescricao}
          </TextStyle>
          <TextStyle>
            <TextStyle bold>Situação:</TextStyle> {coberturas.situacao}
          </TextStyle>
          <TextStyle>
            <TextStyle bold>Apólice: </TextStyle>
            {coberturas.apolice}
          </TextStyle>
          <TextStyle>
            <TextStyle bold>CNPJ:</TextStyle> {coberturas.cpF_CNPJ}
          </TextStyle>
          <TextStyle>
            <TextStyle bold>Seguradora:</TextStyle> {coberturas.seguradora}
          </TextStyle>
          <TextStyle>
            <TextStyle bold>Final da Vigência: </TextStyle>
            {formatDate(coberturas.finalVigencia)}
          </TextStyle>

          <TextStyle>
            <TextStyle bold>Seguradora Fone Assistencial 1: </TextStyle>
            {coberturas.seguradoraFoneAssistencia1}
          </TextStyle>
          <TextStyle>
            <TextStyle bold>Seguradora Fone Assistencial 2: </TextStyle>
            {coberturas.seguradoraFoneAssistencia2}
          </TextStyle>
          {CoberturasMap()}
        </>
      );
    } catch (e) {
      console.log(e);
      return (
        <>
          <ActivityIndicator size="large" color="#0e4b97" />
        </>
      );
    }
  }

  return (
    <>
      <HeaderGradient
        page2
        onBackPress={() => navigation.goBack()}
        name={'Seguro Auto'}
      />


      <BlueView border></BlueView>
      <BlueView activeOpacity={1} onPress={()=>{navigation.navigate('Agendamento_Renovação')}}>
        <RowView renew>
          <View>
            <TextStyle white>
              Próxima Renovação -{' '}
              <TextStyle white bold>
              {formatDate(coberturas.finalVigencia)}
              </TextStyle>
            </TextStyle>
            <TextStyle sub>Renovar</TextStyle>
          </View>

          <Entypo name="chevron-thin-right" size={14} color="white" />
        </RowView>
      </BlueView>
      <ScrollView>
        <Body>{PoliciesMap()}</Body>
      </ScrollView>
      {/* <CarouselStyle page2>
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
      </CarouselStyle> */}
    </>
  );
}
