import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../config/colors';
import AppText from './AppText';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({icon, items, onSelectItem, placeholder, selectedItem}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.lable}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <Icon name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={'slide'}>
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({item}) => (
              <PickerItem
                lable={item.lable}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
});

export default AppPicker;
