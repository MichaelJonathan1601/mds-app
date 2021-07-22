import React, {useState, useRef} from 'react';

import {ScrollView, Dimensions, Text, StatusBar} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {postLogin} from '../../../services/login';

import {useNavigation} from '@react-navigation/native';

import {
  TextView,
  HeaderGradient,
  CarouselStyle,
  CarouselPage,
  ViewButtons,
  ImageStyle,
  TextStyle,
  LowView,
  ButtonGradient,
  ConfirmButton,
} from './styles';

export default function Tutorial() {
  
  const {tutorialLogin} = useSelector((state) => ({...state.login}));
  
  const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  const scroll = useRef('');

  function nextPage() {
    if (page == 0) {
      setPage(1);
      scroll.current.scrollTo({x: Dimensions.get('screen').width});
      console.log(tutorialLogin)
    }

    if (page == 1) {
      setPage(2);
      scroll.current.scrollTo({x: Dimensions.get('screen').width * 2});
    }
    if (page == 2) {
      return 1
    }
  }

  function previousPage() {
    if (page == 0) {
    }

    if (page == 1) {
      setPage(0);
      scroll.current.scrollTo({x: 0});
    }
    if (page == 2) {
      setPage(1);
      scroll.current.scrollTo({x: Dimensions.get('screen').width});
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <HeaderGradient
        colors={['#041b4e', '#093575', '#0e4b97']}
        useAngle={true}
        angle={100}
        angleCenter={{x: 0.5, y: 0.5}}>
        <CarouselStyle>
          <ScrollView
            horizontal={true}
            ref={scroll}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={1000}
            onMomentumScrollEnd={(event) => {
              if (
                event.nativeEvent.contentOffset.x >
                Dimensions.get('screen').width - 10
              ) {
                nextPage();
              }
              if (
                event.nativeEvent.contentOffset.x <
                Dimensions.get('screen').width + 10
              ) {
                previousPage();
              }
            }}
            disableIntervalMomentum={true}
            snapToInterval={Dimensions.get('screen').width}
            decelerationRate="fast">
            <CarouselPage activeOpacity={1}>
              <ImageStyle
                source={require('../../../assets/img/carousel1.png')}
              />
            </CarouselPage>
            <CarouselPage activeOpacity={1}>
              <ImageStyle
                source={require('../../../assets/img/carousel2.png')}
              />
            </CarouselPage>
            <CarouselPage activeOpacity={1}>
              <ImageStyle
                source={require('../../../assets/img/carousel1.png')}
              />
            </CarouselPage>
          </ScrollView>
        </CarouselStyle>
      </HeaderGradient>
      <LowView>
        {page == 0 && (
          <>
            <TextView>
              <TextStyle h1>MDS QR Code</TextStyle>
              <TextStyle>Viu um QR Code da MDS em algum lugar?</TextStyle>
              <TextStyle>Não perca a oportunidade de ganhar</TextStyle>
              <TextStyle>descontos em nosso produtos</TextStyle>
            </TextView>

            <ImageStyle
              page
              source={require('../../../assets/img/page0.png')}
            />
          </>
        )}
        {page == 1 && (
          <>
            <TextView>
              <TextStyle h1>MDS Indicações</TextStyle>
              <TextStyle>Agora você pode indicar a MDS para </TextStyle>
              <TextStyle>outras pessoas compartilhando seu </TextStyle>
              <TextStyle>código e ganhando benefícios</TextStyle>
            </TextView>
            <ImageStyle
              page
              source={require('../../../assets/img/page1.png')}
            />
          </>
        )}
        {page == 2 && (
          <>
            <TextView>
              <TextStyle h1>Bem vindo</TextStyle>
              <TextStyle>Agora você está pronto para </TextStyle>
              <TextStyle>começar a usar o aplicativo da MDS!</TextStyle>
              <TextStyle>Caso tenha alguma dúvida, entre em contato</TextStyle>
              <TextStyle>por um dos nossos meios de atendimento.</TextStyle>
            </TextView>
            <ImageStyle
              page
              source={require('../../../assets/img/page2.png')}
            />
          </>
        )}
        <ViewButtons>
          <ConfirmButton
            white
            onPress={() => {
              previousPage();
            }}>
            <TextStyle backButton>Voltar</TextStyle>
          </ConfirmButton>

          <ButtonGradient
            colors={['#041b4e', '#093575', '#0e4b97']}
            useAngle={true}
            angle={100}
            angleCenter={{x: 0.5, y: 0.5}}>
            <ConfirmButton
              onPress={() => {
                if (nextPage() == 1){
                  postLogin(tutorialLogin.cpf, tutorialLogin.password, dispatch)
                }                
              }}>
              <TextStyle white>Próximo</TextStyle>
            </ConfirmButton>
          </ButtonGradient>
        </ViewButtons>
      </LowView>
    </>
  );
}
