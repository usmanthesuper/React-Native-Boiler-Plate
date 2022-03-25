import React from 'react';
import {View, StyleSheet, Image, TouchableHighlight} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from './AppText';
import colors from '../config/colors';

function ListItem({
  title,
  description,
  image,
  IconComponent,
  onPress = () => console.log('working'),
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {description && (
              <AppText style={styles.description} numberOfLines={2}>
                {description}
              </AppText>
            )}
          </View>
          <Icon name="chevron-right" size={25} color={colors.medium} />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  description: {
    color: colors.medium,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default ListItem;
