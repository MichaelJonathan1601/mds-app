import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {StatusBar, View, ScrollView} from 'react-native';

import SnackBar from '../../../shared/components/SnackBar';
import HeaderGradient from '../../../shared/components/HeaderGradient/index';

import {postAgenda} from '../../../services/agendamento';

import DateSelector from '../../../shared/components/DatePicker';

import {
  Body,
  ButtonText,
  TextStyle,
  ConfirmButton,
  TextInputStyle,
  DescriptionStyle,
} from './styles';

var timer;

export default function AgendamentoSinistro() {
  const {userAccountId} = useSelector((state) => ({...state.login}));
  const {token} = useSelector((state) => ({...state.login}));

  const [date, setDate] = useState(new Date());

  const [displayDate, setDisplayDate] = useState('');

  const [disableButton, setDisableButton] = useState(false);

  const [displayed, setDisplayed] = useState(false);

  const [pickerDisplayed, setPickerDisplayed] = useState(false);

  const [description, setDescription] = useState('');

  const [snackText, setSnackText] = useState(
    'Não foi possível agendar, tente novamente',
  );

  const closeModal = () => {
    if (displayDate == '' || description == '') {
      setDisplayed(false);
      clearTimeout(timer);
    }
  };

  const Display = () => {
    setDisplayed(true);
    timer = setTimeout(() => {
      setDisplayed(false);
      if (displayDate !== '' && description !== '') {
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
        name={'Agendamento Sinistro'}
      />
      <Body>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            minHeight:525,
            paddingTop: '7%'
          }}>
          <View>
            <TextStyle h1>Atendimento Agendado Exclusivo!{'\n'}</TextStyle>
            <TextStyle>
              Para agendar um contato basta selecionar uma data/hora, e escrever
              uma breve descrição sobre o motivo do contato{'\n'}
            </TextStyle>
            <TextStyle>
              Um de nossos atendentes entrará em contato com você!.
            </TextStyle>
          </View>

          <View>
            <TextStyle>Data em que deseja o contato:{'\n'}</TextStyle>
            <TextInputStyle
              onPress={() => {
                setPickerDisplayed(true);
              }}>
              {displayDate}
            </TextInputStyle>

            <DateSelector
              type={'datetime'}
              date={date}
              setVar={setDate}
              pickerDisplayed={pickerDisplayed}
              setPickerDisplay={setPickerDisplayed}
              setDisplayDate={setDisplayDate}
            />
          </View>
          <View>
            <TextStyle>Descrição:</TextStyle>
            <DescriptionStyle
              onChangeText={setDescription}
              multiline={true}
              maxLength={300}></DescriptionStyle>
          </View>

          <ConfirmButton
            disabled={disableButton}
            onPress={() => {
              console.log(userAccountId, date, description);
              if (displayDate !== '' && description !== '') {
                setDisableButton(true);
                postAgenda(
                  userAccountId,
                  date,
                  description,
                  'Sinistro',
                  token,
                ).then((data) => {
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
