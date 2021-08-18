//pakcages
import React from 'react';

//core components
import {Button, Text} from 'react-native';

//components
import {Header, Screen} from '../components';

export default function UsersDetailsScreen({navigation}: any) {
  return (
    <Screen>
      <Header
        navigation={navigation}
        actionLeft={() => navigation.openDrawer()}
        title="Users details"
      />
      <Text>Hola mundo users details</Text>
      <Button title="Navigate to Home" onPress={() => navigation.goBack()} />
    </Screen>
  );
}
