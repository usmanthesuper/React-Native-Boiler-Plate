import React from 'react';
import {Text} from 'react-native';

import defaultStyles from '../config/Styles';

function AppText({children, style, ...otehrProps}) {
  return (
    <Text style={[defaultStyles.text, style]} {...otehrProps}>
      {children}
    </Text>
  );
}

export default AppText;
