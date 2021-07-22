import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {StatusBar, ScrollView, View} from 'react-native';

import {
  Body,
  ButtonText,
  TextStyle,
  TextInputStyle,
  ViewStyle,
  ConfirmButton,
} from './styles';
import Entypo from 'react-native-vector-icons/dist/Entypo';

import HeaderGradient from '../../../shared/components/HeaderGradient/index';
import SnackBar from '../../../shared/components/SnackBar';

import {postFeedback} from '../../../services/feedback';

var timer;

export default function Feedback() {
  const {userAccountId} = useSelector((state) => ({...state.login}));
  const {token} = useSelector((state) => ({...state.login}));

  const [helpful, setHelpful] = useState(1);
  const [performance, setPerformance] = useState(1);
  const [friendly, setFriendly] = useState(1);
  const [description, setDescription] = useState('');

  const [disableButton, setDisableButton] = useState(false);

  const [displayed, setDisplayed] = useState(false);
  const [snackText, setSnackText] = useState(
    'Não foi possível enviar, tente novamente',
  );

  const closeModal = () => {
    //setDisplayed(false);
    //clearTimeout(timer);
  };

  const Display = () => {
    setDisplayed(true);
    timer = setTimeout(() => {
      setDisplayed(false);
      navigation.pop();
    }, 3000);
  };

  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  function rate(value, categorie) {
    switch (categorie) {
      case 1:
        setHelpful(value);
        break;
      case 2:
        setPerformance(value);
        break;
      case 3:
        setFriendly(value);
        break;
    }
  }

  return (
    <>
      <HeaderGradient
        page2
        onBackPress={() => navigation.goBack()}
        name={'Feedback'}
      />

      <Body>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-between',
            minHeight:570, 
            paddingTop: '7%'
          }}>
          <TextStyle h1>Sua Opinião é Muito Importante!</TextStyle>
          <TextStyle>
            Selecione abaixo o número de estrelas que acha adequado para cada
            categoria. Depois, se achar interessante, nos escreva uma mensagem
            dizendo o que achou do App da MDS!
          </TextStyle>

          <ViewStyle rowView>
            <ViewStyle justLeft>
              <TextStyle>Útil</TextStyle>
              <TextStyle>Performance</TextStyle>
              <TextStyle>Amigável</TextStyle>
            </ViewStyle>
            <ViewStyle justRight>
              <ViewStyle star>
                <Entypo
                  onPress={() => {
                    rate(1, 1);
                  }}
                  name={'star'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(2, 1);
                  }}
                  name={helpful > 1 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(3, 1);
                  }}
                  name={helpful > 2 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(4, 1);
                  }}
                  name={helpful > 3 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(5, 1);
                  }}
                  name={helpful > 4 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
              </ViewStyle>
              <ViewStyle star>
                <Entypo
                  onPress={() => {
                    rate(1, 2);
                  }}
                  name={'star'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(2, 2);
                  }}
                  name={performance > 1 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(3, 2);
                  }}
                  name={performance > 2 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(4, 2);
                  }}
                  name={performance > 3 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(5, 2);
                  }}
                  name={performance > 4 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
              </ViewStyle>
              <ViewStyle star>
                <Entypo
                  onPress={() => {
                    rate(1, 3);
                  }}
                  name={'star'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(2, 3);
                  }}
                  name={friendly > 1 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(3, 3);
                  }}
                  name={friendly > 2 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(4, 3);
                  }}
                  name={friendly > 3 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
                <Entypo
                  onPress={() => {
                    rate(5, 3);
                  }}
                  name={friendly > 4 ? 'star' : 'star-outlined'}
                  color={'#051f54'}
                  size={30}
                />
              </ViewStyle>
            </ViewStyle>
          </ViewStyle>
          <View>
            <TextStyle>Descrição:{'\n'}</TextStyle>
            <TextInputStyle
              onChangeText={setDescription}
              multiline={true}
              maxLength={300}
            />
          </View>
          <ConfirmButton
            disabled={disableButton}
            onPress={() => {
              setDisableButton(true);
              postFeedback(
                userAccountId,
                helpful,
                performance,
                friendly,
                description,
                token,
              ).then((data) => {
                setSnackText(data);
                Display();
              });
            }}>
            <ButtonText>Enviar Feedback</ButtonText>
          </ConfirmButton>
        </ScrollView>
      </Body>

      <SnackBar showSnack={displayed} toggle={closeModal} text={snackText} />
    </>
  );
}
