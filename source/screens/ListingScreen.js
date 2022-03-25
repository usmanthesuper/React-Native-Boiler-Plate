import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
  {
    id: 1,
    title: 'Red jacket for sale',
    price: 100,
    image: require('../Assets/jacket.jpg'),
  },
  {
    id: 2,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../Assets/couch.jpg'),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({item}) => (
          <Card
            title={item.title}
            description={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
});

export default ListingScreen;
