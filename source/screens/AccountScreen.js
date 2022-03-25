import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import AppIcon from '../components/AppIcon';

import ListItem from '../components/ListItem';
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeperator';

const menuItems = [
  {
    title: 'My listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <>
      <View style={{backgroundColor: '#f7f4f4', height: '100%'}}>
        <View style={styles.container}>
          <ListItem
            title="Muhammad usman"
            description="usmanarain7755@gmail.com"
            image={require('../Assets/mosh.jpg')}
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={menuItem => menuItem.title}
            renderItem={({item}) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <AppIcon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
              />
            )}
            ItemSeparatorComponent={ListItemSeperator}
          />
        </View>
        <View style={{backgroundColor: 'white'}}>
          <ListItem
            title="Logout"
            IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: 'white',
  },
});

export default AccountScreen;
