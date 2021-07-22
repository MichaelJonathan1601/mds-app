import React, {useState} from 'react';
import {StyleSheet, Text, Modal, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';

export default function SnackBar({showSnack, toggle, text}) {
  return (
    <Modal
      visible={showSnack}
      animationType={'fade'}
      transparent={true}
      statusBarTranslucent={true}>
      <TouchableOpacity
        onPress={() => toggle()}
        style={{
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}>
        <View style={styles.dropDown}>
          <Text style={styles.modalTitle}>{text}</Text>

          <TouchableOpacity
            onPress={() => toggle()}
            style={{paddingTop: 4, paddingBottom: 4}}>
            <Ionicons
                name="close"
                size={25}
                color={'#999'}
              />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  dropDown: {
    flexDirection: 'row',
    borderRadius: 5,
    marginHorizontal: 23,
    padding: 20,
    backgroundColor: '#efefef',
    top: 66,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 99,
  },

  modalTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
