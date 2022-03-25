import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../Assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={{marginVertical: 40}}>
          <ListItem
            image={require('../Assets/mosh.jpg')}
            title="Muhammad Usman"
            description="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontWeight: 'bold',
    color: colors.secondary,
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
});

export default ListingDetailsScreen;
