import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import colors from '../config/colors';
import AppText from '../components/AppText';

function Card({title, description, image}) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        <AppText style={styles.description} numberOfLines={2}>
          {description}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    paddingBottom: 10,
    marginVertical: 10,
  },
  detailsContainer: {
    padding: 10,
  },
  description: {
    fontWeight: 'bold',
    color: colors.secondary,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textTransform: 'capitalize',
    marginBottom: 10,
    color: colors.black,
  },
});

export default Card;
