import React, {useState, useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

import {
  StatusBar,
  ScrollView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

import Carousel from '../../../shared/components/Carousel';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../../../selection.json';
const CustomIcon = createIconSetFromIcoMoon(icoMoonConfig);
import HeaderGradient from '../../../shared/components/HeaderGradient/index';


import Entypo from 'react-native-vector-icons/dist/Entypo';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';

import {getPolicies} from '../../../services/policies';

import {
  ViewRectangle,
  ButtonText,
  TextStyle,
  PaddingView,
  RowView,
  ImageStyle,
  CarouselStyle,
  CarouselButton,
  RectangleText,
} from './styles';

export default function Apolices() {
  const {userAccountId} = useSelector((state) => ({...state.login}));
  const {token} = useSelector((state) => ({...state.login}));
  const {userPolicies} = useSelector((state) => ({...state.policies}));

  const [page2, setPage2] = useState(0);
  const [coberturas, setCoberturas] = useState(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.addListener('focus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  useEffect(() => {
      setCoberturas(userPolicies);
  }, []);
 

  function SeguroAuto() {
    try {

      console.log(coberturas.length);
      if(coberturas.length== 0){
        return (
          <ViewRectangle>
            <Entypo name="emoji-sad" size={30} color="#041b4e" />
              <RectangleText>
                <TextStyle grey>Nenhuma Apólice Cadastrada!</TextStyle>
              </RectangleText>
          </ViewRectangle>
        );

      }else{
        return coberturas.map((item, i) => {
          console.log(item);
         return (
           <ViewRectangle
             key={item.itemDescricao}
             onPress={() => {
               dispatch({
                 type: 'USER_POLICIES_SELECTED',
                 payload: item,
               });
               navigation.navigate('veiculo');
             }}>
             <RowView>
               <ImageStyle source={require('../../../assets/img/safeCar.png')} />
               <RectangleText>
                 {/* <TextStyle h1>Seguro Auto {i + 1}</TextStyle> */}
                 <TextStyle grey>{item.itemDescricao}</TextStyle>
               </RectangleText>
             </RowView>
             <Entypo name="chevron-thin-right" size={14} color="#041b4e" />
           </ViewRectangle>
         );
       });
      } 
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
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <HeaderGradient name={'Apólices'} />

      <ScrollView contentContainerStyle={{padding: '7%'}} horizontal={false}>
        {SeguroAuto()}
      </ScrollView>

      <CarouselStyle>
        <PaddingView up>
          <TextStyle grey>Conheça outros produtos MDS</TextStyle>
        </PaddingView>

        <Carousel>
          
          <CarouselButton
            activeOpacity={1}
            onPress={() =>
              navigation.navigate('productSelect', {
                  name: 'Automóvel',
                  productId: '18bc1f39-862e-4851-07d8-08d735eb11b9',
                  tag: 'auto',
               
              })
            }>
            <ImageStyle
              source={require('../../../assets/img/SeguroAuto.png')}
            />
            <ButtonText>Seguro Auto</ButtonText>
          </CarouselButton>
          <CarouselButton
            left
            activeOpacity={1}
            onPress={() => {
              navigation.navigate('productSelect', {
                  name: 'Seguro de Vida',
                  productId: 'e70ff0aa-4809-4b03-07d4-08d735eb11b9',
                  tag: 'life',
              });
            }}>
            <ImageStyle
              source={require('../../../assets/img/SeguroVida.png')}
            />
            
            <ButtonText>Seguro de vida</ButtonText>
          </CarouselButton>
          <CarouselButton
            activeOpacity={1}
            onPress={() => {
              navigation.navigate('productSelect', {
                "productId": "68d68454-b6e2-46b3-07d6-08d735eb11b9",
                "name": "Seguro Residencial",
                "tag": "residencial"
              });
            }}>
            <Ionicons name="home-outline" size={36} color="#041b4e" />
            <ButtonText>Seguro Residencial</ButtonText>
          </CarouselButton>
          <CarouselButton
            right
            activeOpacity={1}
            onPress={() => {
              navigation.navigate('productSelect', {
                "productId": "0ce15dc4-9fd0-44cf-07de-08d735eb11b9",
                "name": "Viagem",
                "tag": "viagem"
              });
            }}>
            <Ionicons name="airplane-outline" size={36} color="#041b4e" />
            <ButtonText>Viagem</ButtonText>
          </CarouselButton>
        </Carousel>
        <PaddingView down>
          <RowView>
            <TextStyle onPress={() => navigation.navigate('Produtos')}>
              Ver todos os produtos{' '}
            </TextStyle>
            <Entypo name="chevron-thin-right" size={14} color="#041b4e" />
          </RowView>
        </PaddingView>
      </CarouselStyle>
    </>
  );
}
