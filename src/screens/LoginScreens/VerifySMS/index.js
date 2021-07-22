import React, {useState, useRef, useEffect} from 'react';

import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonView,
  ConfirmButton,
  ButtonText,
  HeaderText,
  HeaderDescription,
  RegisterConfirmed,
  GradientBody,
  TextView,
  Header,
  NumberInput,
  InputView,
  ImageConfirmed,
} from './styles';

import Icon from 'react-native-vector-icons/dist/Entypo';

export default function VerifySMS() {
  const navigation = useNavigation();

  const [sms, setSMS] = useState(0);

  const input1 = useRef('');
  const input2 = useRef('');
  const input3 = useRef('');
  const input4 = useRef('');

  const [input1value, setInput1value] = useState('');
  const [input2value, setInput2value] = useState('');
  const [input3value, setInput3value] = useState('');
  const [input4value, setInput4value] = useState('');

  useEffect(() => {
    try {
      if (input1.current.isFocused() && input1value !== '') {
        input2.current.focus();
      }
      if (input2.current.isFocused() && input2value !== '') {
        input3.current.focus();
      }
      if (input3.current.isFocused() && input3value !== '') {
        input4.current.focus();
      }
      if (input4.current.isFocused() && input4value !== '') {
        setSMS(1);
      }
    } catch (e) {}
  }),
    [];

  return (
    <>
      {sms == 0 && (
        <>
          <GradientBody
            colors={['#041b4e', '#093575', '#0e4b97']}
            useAngle={true}
            angle={100}
            angleCenter={{x: 0.5, y: 0.5}}>
            <Header>
              <TouchableOpacity onPress={() => navigation.pop()}>
                <Icon name="chevron-thin-left" size={30} color="white" />
              </TouchableOpacity>
              <View>
                <HeaderText>Verificção</HeaderText>
                <HeaderDescription>
                  Digite o código que enviamos por SMS
                </HeaderDescription>
              </View>
            </Header>
            <InputView>
              <NumberInput
                placeholder="0"
                placeholderTextColor="white"
                maxLength={1}
                ref={input1}
                autoFocus
                onChangeText={setInput1value}
                keyboardType="numeric"
              />
              <NumberInput
                placeholder="0"
                placeholderTextColor="white"
                maxLength={1}
                ref={input2}
                onChangeText={setInput2value}
                keyboardType="numeric"
              />
              <NumberInput
                placeholder="0"
                placeholderTextColor="white"
                maxLength={1}
                ref={input3}
                onChangeText={setInput3value}
                keyboardType="numeric"
              />
              <NumberInput
                placeholder="0"
                placeholderTextColor="white"
                maxLength={1}
                ref={input4}
                onChangeText={setInput4value}
                keyboardType="numeric"
              />
            </InputView>
          </GradientBody>
        </>
      )}

      {sms == 1 && (
        <>
          <GradientBody
            colors={['#041b4e', '#093575', '#0e4b97']}
            useAngle={true}
            angle={100}
            angleCenter={{x: 0.5, y: 0.5}}>
            <RegisterConfirmed>
              <TextView>
                <ImageConfirmed
                  source={require('../../../assets/img/confirmed.png')}
                />
                <HeaderText>Cadastro confirmado!</HeaderText>
                <HeaderDescription>Bem vindo a MDS</HeaderDescription>
              </TextView>
              <ButtonView>
                <ConfirmButton onPress={() => navigation.navigate('Tutorial')}>
                  <ButtonText>Concluir Cadastro</ButtonText>
                </ConfirmButton>
              </ButtonView>
            </RegisterConfirmed>
          </GradientBody>
        </>
      )}
    </>
  );
}
