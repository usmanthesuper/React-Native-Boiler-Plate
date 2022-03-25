import React, {useState} from 'react';
import {FlatList} from 'react-native';

import ListItemSeperator from '../components/ListItemSeperator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import SwipeableListItem from '../components/SwipeableListItem';

const hardCodedMasseges = [
  {
    id: 1,
    title: 'T1',
    description: 'd1',
    image: require('../Assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'd2',
    image: require('../Assets/mosh.jpg'),
  },
];

function MessagesScreen(props) {
  const [masseges, setMasseges] = useState(hardCodedMasseges);
  const [refreshing, setRefreshing] = useState(false);

  const handleMessageDelete = massege => {
    setMasseges(masseges.filter(m => m.id != massege.id));
  };

  return (
    <FlatList
      data={masseges}
      keyExtractor={massege => massege.id.toString()}
      renderItem={({item}) => (
        <SwipeableListItem
          title={item.title}
          description={item.description}
          image={item.image}
          renderRightActions={() => (
            <ListItemDeleteAction onPress={() => handleMessageDelete(item)} />
          )}
        />
      )}
      ItemSeparatorComponent={ListItemSeperator}
      refreshing={refreshing}
      onRefresh={() =>
        setMasseges([
          {
            id: 1,
            title: 'T1',
            description: 'd1',
            image: require('../Assets/mosh.jpg'),
          },
        ])
      }
    />
  );
}

export default MessagesScreen;
