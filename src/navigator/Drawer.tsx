// packages
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import {About} from '../screens';

//navigator
import BottomNavigator from './Bottom';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={{title: 'Home'}}
        name="Bottom"
        component={BottomNavigator}
      />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
