import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import defaultStyles from '../config/Styles';

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon name={icon} size={20} color={colors.medium} style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[styles.text, defaultStyles.text]}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 5,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppTextInput;
