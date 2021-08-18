// packages
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//screens
import {HomeScreen, Categories, Users, Settings} from '../screens';

//components
import {Icon} from '../components';

const Bottom = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        activeBackgroundColor: 'blue',
        labelStyle: {
          fontWeight: '700',
          fontFamily: 'Oswald-bold',
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="home" focused={focused} size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name="categories"
              color={color}
              size={size}
              focused={focused}
            />
          ),
        }}
      />
      <Bottom.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="users" color={color} size={size} focused={focused} />
          ),
        }}
      />
      <Bottom.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="settings" color={color} size={size} focused={focused} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}
