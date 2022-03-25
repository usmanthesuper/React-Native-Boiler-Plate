import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import ListItem from './ListItem';

function SwipeableListItem({...Allprops}) {
  return (
    <GestureHandlerRootView>
      <ListItem {...Allprops} />
    </GestureHandlerRootView>
  );
}

export default SwipeableListItem;
