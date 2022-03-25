import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="trash-can" size={30} color="white" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
