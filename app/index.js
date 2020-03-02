import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#58A7A9',
});

export default () => (
  <Home />
);