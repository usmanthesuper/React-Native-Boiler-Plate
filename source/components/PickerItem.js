import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import AppText from './AppText';

function PickerItem({lable, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}> {lable}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 15,
  },
});

export default PickerItem;
