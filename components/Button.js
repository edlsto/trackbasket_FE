import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const Button = ({ text, onPress, customStyles, customTextStyles }) => (
  <TouchableOpacity onPress={onPress} style={[styles.submitBtn, customStyles]}>
    <Text style={[styles.submitBtnText, customTextStyles]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  submitBtn: {
    backgroundColor: '#59DE7E',
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
    alignSelf: 'center',
    width: 220,
  },
  submitBtnText: {
    fontSize: 24,
    fontFamily: 'HelveticaNeue-Bold',
    color: 'white',
    textAlign: 'center',
  },
});
