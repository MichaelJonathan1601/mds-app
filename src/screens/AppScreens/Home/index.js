import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, Dimensions, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import ButtonCircle from '../../../shared/components/ButtonCircle';
import Carousel from '../../../shared/components/Carousel';


import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';


import {
  RowView,
  Header,
  HeaderTop,
  HeaderText,
  TextStyleBold,
  TextStyle,
  RenovationGradient,
  RenovationView,
  TextInputStyle,
  ButtonView,
  ImageLogo,
  ButtonContainer,
  ImageStyle,
  CalendarView,
  CarouselStyle,
  CarouselButton,
  InputView,
  SearchBox,
} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';


import {formatDate} from '../../../shared/utils/masks'
import {getPolicies} from '../../../services/policies';

var searchArray = [
  'Apólices',
  'Promoções',
  'Produtos',
  'Oferta MDS',
  'Contatos',
  'Feedback',
];



export default function Home() {
  const {userInfo} = useSelector((state) => ({...state.login}));
  const {userAccountId} = useSelector((state) => ({...state.login}));
  const {token} = useSelector((state) => ({...state.login}));

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [result, setResult] = useState('');

  const [searchItem, setSearchItem] = useState('');
  
  const [coberturas, setCoberturas] = useState(null);
  
  
  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setTranslucent;
      StatusBar.setBackgroundColor('transparent');
    });
  }, []);

  useEffect(() => {
    if (searchItem !== '') {
      var result = searchArray.filter((name) =>
        name.toUpperCase().includes(searchItem.toUpperCase()),
      );
      //console.log(result);
    }
    setResult(result);
  }, [searchItem]);

  useEffect(() => {
    getPolicies(userAccountId, token, dispatch).then((data) => {
      setCoberturas(data);
    });
  }, []);

  function printResult() {
    try {
      return result.map((item, i) => {
        return (
          <TouchableOpacity
            key={item}
            onPress={() => {
              navigation.navigate(item);
            }}>
            <TextStyle black>{item}</TextStyle>
          </TouchableOpacity>
        );
      });
    } catch (e) {}
  }

  function SeguroAuto() {
    try {
      if(coberturas.length>0){
          let x = null;
          var dates=[];
          coberturas.map((item, i) => {
            dates.push(new Date(item.finalVigencia));            
          });               
          //var maxDate=new Date(Math.max.apply(null,dates));
          var minDate=new Date(Math.min.apply(null,dates));
          console.log(minDate + "jooj");
          return (
            <RenovationGradient
              colors={['#041b4e', '#093575', '#0e4b97']}
              useAngle={true}
              angle={100}
              angleCenter={{x: 0.5, y: 0.5}}>
                <RenovationView>
                  <RowView>
                    <ImageStyle source={require('../../../assets/img/renovacao.png')} />
                    <CalendarView>
                      <TextStyle>Próxima Renovação</TextStyle>
                      <TextStyle>
                        <TextStyleBold>{formatDate(minDate)}</TextStyleBold>
                      </TextStyle>
                    </CalendarView>
                  </RowView>  
                  <Entypo name="chevron-thin-right" size={30} color="white" onPress={()=> navigation.navigate('Agendamento_Renovação')}/>
                </RenovationView>
            </RenovationGradient>
          );
      }else{
        error
      }
    } catch (e) {
      console.log(e);
      return (
        <RenovationGradient
        colors={['#041b4e', '#093575', '#0e4b97']}
        useAngle={true}
        angle={100}
        angleCenter={{x: 0.5, y: 0.5}}>
          <RenovationView>
            <RowView>

              <FontAwesome name="shopping-bag" size={50} color="#00a6ff" />
              
              <CalendarView>
                <TextStyle>Confira os Produtos da MDS</TextStyle>
                
              </CalendarView>
            </RowView>

            <Entypo name="chevron-thin-right" size={30} color="white" />
          </RenovationView>
        </RenovationGradient>
      );
    }
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <HeaderTop>
          <RowView>
            <Icon name="human-handsup" color={'#0b3a7e'} size={30} />
            <HeaderText>Olá, {userInfo.name.split(' ', 1)}</HeaderText>
          </RowView>
          <ImageLogo source={require('../../../assets/img/mds.png')} />
        </HeaderTop>
        <InputView>
          <TextInputStyle
            placeholder="O que você procura?"
            onChangeText={setSearchItem}
          />
          <Icon
            name="magnify"
            style={{position: 'absolute', right: '3%', top: '20%'}}
            color={'#0b3a7e'}
            size={30}
          />
          <SearchBox>{printResult()}</SearchBox>
        </InputView>
      </Header>
      {SeguroAuto()}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between',
        }}>
        <ButtonContainer>
          <ButtonView>
            <ButtonCircle
              page="Apólices"
              img={require('../../../assets/img/apolice.png')}
              text={'Apólice'}
            />

            <ButtonCircle
              page="Promoções"
              img={require('../../../assets/img/promo.png')}
              text={'Promoções'}
            />

            <ButtonCircle
              page="Produtos"
              img={require('../../../assets/img/produtos.png')}
              text={'Produtos'}
            />
          </ButtonView>

          <ButtonView>
            <ButtonCircle
              page={'Oferta MDS'}
              icon={'tag-faces'}
              text={'Oferta MDS'}
            />

            <ButtonCircle
              page={'Contatos'}
              img={require('../../../assets/img/contatos.png')}
              text={'Contatos'}
            />

            <ButtonCircle
              page={'Feedback'}
              icon={'star-half-full'}
              text={'Feedback'}
            />
          </ButtonView>
        </ButtonContainer>
        {/* <CarouselStyle>
          <Carousel>
            <CarouselButton left activeOpacity={1}>
              <ImageStyle source={require('../../../assets/img/uber.png')} />
            </CarouselButton>
            <CarouselButton activeOpacity={1}>
              <ImageStyle source={require('../../../assets/img/ifood.png')} />
            </CarouselButton>
            <CarouselButton activeOpacity={1}>
              <ImageStyle
                source={require('../../../assets/img/healthfy.png')}
              />
            </CarouselButton>
            <CarouselButton right activeOpacity={1}>
              <ImageStyle source={require('../../../assets/img/rappi.png')} />
            </CarouselButton>
          </Carousel>
        </CarouselStyle> */}
      </ScrollView>
    </>
  );
}
