//pakcages
import React from 'react';

//core components
import {Text} from 'react-native';

//components
import {Header, Screen} from '../components';

export default function AboutScreen({navigation}: any) {
  return (
    <Screen>
      <Header navigation={navigation} title="About" />
      <Text>Hola mundo About</Text>
    </Screen>
  );
}
