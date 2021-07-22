import React, {useState} from 'react';

import {Dimensions, Modal, View, TouchableOpacity} from 'react-native';

import DatePicker from 'react-native-date-picker';

import {TextStyle} from './styles';

export default function DateSelector({
  date,
  setVar,
  pickerDisplayed,
  setPickerDisplay,
  setDisplayDate,
  type,
}) {
  const FormatDate = (d) => {
    if (type == 'date') {
      setDisplayDate(
        d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear(),
      );
    } else {
      setDisplayDate(
        d.getDate() +
          '/' +
          (d.getMonth() + 1) +
          '/' +
          d.getFullYear() +
          '\t\t\t\t\t' +
          d.getHours() +
          ':' +
          d.getMinutes(),
      );
    }
  };

  return (
    <Modal
      visible={pickerDisplayed}
      animationType={'fade'}
      transparent={true}
      statusBarTranslucent={true}>
      <View
        style={{
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          height: '100%',
          activeOpacity: 1,
          justifyContent: 'flex-end',
          paddingBottom: '10%',
          alignItems: 'center',
          zIndex: -1,
        }}>
        <View style={{width: '80%', backgroundColor: 'white'}}>
          <DatePicker
            style={{
              backgroundColor: 'white',
              width:
                Dimensions.get('screen').width -
                (Dimensions.get('screen').width * 20) / 100,
            }}
            mode={type}
            date={date}
            onDateChange={setVar}
          />
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                setPickerDisplay(false);
              }}
              style={{
                backgroundColor: 'white',
                width: '50%',
                padding: 15,
                alignItems: 'center',
                borderTopColor: 'lightgrey',
                borderTopWidth: 0.5,
                borderRightColor: 'lightgrey',
                borderRightWidth: 0.25,
              }}>
              <TextStyle>Cancelar</TextStyle>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPickerDisplay(false);
                FormatDate(date);
              }}
              style={{
                alignItems: 'center',
                backgroundColor: 'white',
                width: '50%',
                padding: 15,
                borderTopColor: 'lightgrey',
                borderTopWidth: 0.5,
                borderLeftColor: 'lightgrey',
                borderLeftWidth: 0.25,
              }}>
              <TextStyle>OK</TextStyle>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
