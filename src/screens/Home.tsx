//packages
import React from 'react';

//core components
import {Button, Text} from 'react-native';

//components
import {Header, Screen} from '../components';

// @ts-ignore
export default function HomeScreen({navigation}: any) {
  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Home"
      />
      <Text>Hola mundo home</Text>
      <Button
        title="Navigate to user Details"
        onPress={() => navigation.navigate('UserDetails')}
      />
    </Screen>
  );
}
