import React from 'react';
import {StyleSheet, SafeAreaView, View, Platform} from 'react-native';

function Screen({children, style}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    // width: '100%',
    // height: '100%',
    Flex: 1,
    paddingTop: Platform.OS == 'android' ? 20 : 44,
    padding: 10,
  },
});

export default Screen;
