import {View,LogBox} from 'react-native';
import React from 'react';
import StackNavigation from './src/navigator/StackNavigation';
import './src/locales/i18n';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <View style={{flex: 1}}>
      <StackNavigation />
    </View>
  );
};

export default App;
