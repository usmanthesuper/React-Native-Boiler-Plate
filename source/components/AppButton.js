import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import colors from '../config/colors';

function AppButton({
  tittle,
  onPress = () => console.log('Pressed'),
  color = 'primary',
}) {
  return (
    <>
      <TouchableOpacity
        style={[styles.btn, {backgroundColor: colors[color]}]}
        onPress={onPress}>
        <Text style={styles.text}>{tittle}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    marginVertical: 5,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default AppButton;
