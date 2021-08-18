// packages
import React from 'react';

import {Text} from 'react-native';

interface IItem {
  id: string;
  name: string;
  desc: string;
  image: string;
}

// @ts-ignore
export default function Card({item}: any) {
  return <Text style={{color: 'black'}}>{item.name}</Text>;
}
