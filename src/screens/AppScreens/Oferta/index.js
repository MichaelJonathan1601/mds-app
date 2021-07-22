import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {StatusBar, View, ScrollView} from 'react-native';

import SnackBar from '../../../shared/components/SnackBar';
import HeaderGradient from '../../../shared/components/HeaderGradient/index';

import DateSelector from '../../../shared/components/DatePicker';

import {postOffer} from '../../../services/oferta';
import {Picker} from '@react-native-community/picker';
import {
  Body,
  ButtonText,
  TextStyle,
  ConfirmButton,
  TextInputStyle,
} from './styles';

var timer;

export default function Oferta() {
  const {userAccountId} = useSelector((state) => ({...state.login}));
  const {token} = useSelector((state) => ({...state.login}));

  const [date, setDate] = useState(new Date());

  const [disableButton, setDisableButton] = useState(false);

  const [pickerDisplayed, setPickerDisplayed] = useState(false);

  const [displayDate, setDisplayDate] = useState('');
  const [product, setProduct] = useState('');

  const [displayed, setDisplayed] = useState(false);

  const [snackText, setSnackText] = useState(
    'Não foi possível agendar, tente novamente',
  );

  const closeModal = () => {
    if (displayDate == '') {
      setDisplayed(false);
      clearTimeout(timer);
    }
  };

  const Display = () => {
    setDisplayed(true);
    timer = setTimeout(() => {
      setDisplayed(false);
      if (displayDate !== '') {
        navigation.pop();
      }
    }, 3000);
  };

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
        name={'Agendamento'}
      />
      <Body>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            minHeight: 500,
            paddingTop: '7%'
          }}>
          <View>
            <TextStyle h1>Ofertas MDS!</TextStyle>
            <TextStyle>
              "Informe os seguros que
              <TextStyle bold> não foram emitidos pela MDS</TextStyle> e
              entraremos em contato com as melhores ofertas para você! Assim que
              sua apólice estiver para vencer, um de nossos consultores entrará
              em contato."
            </TextStyle>
            <TextStyle>
              Assim que sua apólice estiver para vencer, um de nossos atendentes
              entrará em contato.
            </TextStyle>
          </View>

          <View>
            <TextStyle>Produtos:</TextStyle>
            <Picker
              selectedValue={product}
              style={{height: 50, width: '100%'}}
              onValueChange={(itemValue) => setProduct(itemValue)}>
              <Picker.Item
                label="Aluguel de Carro"
                value="9281df1a-958d-4c39-07d9-08d735eb11b9"
              />
              <Picker.Item
                label="Automóvel"
                value="18bc1f39-862e-4851-07d8-08d735eb11b9"
              />
              <Picker.Item
                label="Fiança Locatícia"
                value="ab4829fd-da56-4be8-07da-08d735eb11b9"
              />
              <Picker.Item
                label="Odontológico"
                value="3a1a6e5e-92d1-4723-e2e2-08d739f9eca2"
              />
              <Picker.Item
                label="Plano para Pets"
                value="46642bee-9779-4fa1-07d7-08d735eb11b9"
              />
              <Picker.Item
                label="Portáteis"
                value="b054fcf5-55ad-48b1-ac70-08d737dfaf94"
              />
              <Picker.Item
                label="Responsabilidade Civil Profissional para Médicos"
                value="dbb5f2aa-d302-4833-239d-08d736348638"
              />
              <Picker.Item
                label="Saúde"
                value="3c146675-f20b-4636-4dcc-08d73867663d"
              />
              <Picker.Item
                label="Seguro Bike"
                value="d87a8f29-2541-4c17-07db-08d735eb11b9"
              />
              <Picker.Item
                label="Seguro de Acidentes Pessoaiss"
                value="c341d7c1-b3df-4092-07d5-08d735eb11b9"
              />
              <Picker.Item
                label="Seguro de Vida"
                value="e70ff0aa-4809-4b03-07d4-08d735eb11b9"
              />
              <Picker.Item
                label="Seguro Residencial"
                value="68d68454-b6e2-46b3-07d6-08d735eb11b9"
              />
              <Picker.Item
                label="Viagem"
                value="0ce15dc4-9fd0-44cf-07de-08d735eb11b9"
              />
              <Picker.Item
                label="Vida Mulher"
                value="f88dc57c-14da-43d7-07dd-08d735eb11b9"
              />
            </Picker>
          </View>
          <View>
            <TextStyle>Data de vencimento da apólice:{'\n'}</TextStyle>
            <TextInputStyle
              onPress={() => {
                setPickerDisplayed(true);
              }}>
              {displayDate}
            </TextInputStyle>
            <DateSelector
              type={'date'}
              date={date}
              setVar={setDate}
              pickerDisplayed={pickerDisplayed}
              setPickerDisplay={setPickerDisplayed}
              setDisplayDate={setDisplayDate}
            />
          </View>
          <ConfirmButton
            disabled={disableButton}
            onPress={() => {
              console.log(userAccountId, product, date);
              if (displayDate !== '') {
                setDisableButton(true);
                postOffer(userAccountId, product, date, token).then((data) => {
                  setSnackText(data);
                  Display();
                });
              } else {
                setSnackText('Preencha os campos!');
                Display();
              }
            }}>
            <ButtonText>Enviar </ButtonText>
          </ConfirmButton>
        </ScrollView>
      </Body>

      <SnackBar showSnack={displayed} toggle={closeModal} text={snackText} />
    </>
  );
}
