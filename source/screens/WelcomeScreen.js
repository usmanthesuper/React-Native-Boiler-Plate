import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';

import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <>
      <ImageBackground
        blurRadius={5}
        style={styles.background}
        source={require('../Assets/background.jpg')}>
        <View style={styles.logo_div}>
          <Image
            style={styles.logo}
            source={require('../Assets/logo-red.png')}
          />
          <Text style={styles.logo_title}>Sell what you don't need</Text>
        </View>
        <View style={styles.btnsContainer}>
          <AppButton tittle="login" />
          <AppButton tittle="register" color="secondary" />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btnsContainer: {
    width: '100%',
    padding: 10,
  },
  logo_div: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logo_title: {
    textTransform: 'capitalize',
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  registerBtn: {
    backgroundColor: '#4ECDC4',
    width: '100%',
    height: 60,
  },
});

export default WelcomeScreen;
