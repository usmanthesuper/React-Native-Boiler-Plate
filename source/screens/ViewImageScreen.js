import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <Icon name="close" size={30} color="white" />
        </View>
        <View style={styles.deleteIcon}>
          <Icon name="trash-can-outline" size={30} color="white" />
        </View>
        <Image
          resizeMode="contain"
          style={styles.chairImage}
          source={require('../Assets/chair.jpg')}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  chairImage: {
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
