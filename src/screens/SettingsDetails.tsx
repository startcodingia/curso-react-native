//pakcages
import React from 'react';

//core components
import {Text} from 'react-native';

//components
import {Header, Screen} from '../components';

export default function SettingsDetailsScreen({navigation}: any) {
  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Settings details"
      />
      <Text>Hola mundo settings details</Text>
    </Screen>
  );
}
