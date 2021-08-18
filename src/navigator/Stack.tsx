//packages
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UsersDetails, SettingsDetails, Camera, LoginScreen} from '../screens';

//navigator
import DrawerNavigator from './Drawer';

// provider
import {Auth} from '../Provider/AuthProvider';

const Stack = createStackNavigator();
export default function StackNavigator() {
  const {isLogged} = React.useContext(Auth);

  // @ts-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isLogged ? (
          <>
            <Stack.Screen name="Drawer" component={DrawerNavigator} />
            <Stack.Screen name="UserDetails" component={UsersDetails} />
            <Stack.Screen name="SettingsDetails" component={SettingsDetails} />
            <Stack.Screen name="Camera" component={Camera} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
