// packages
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

// core components
import {View} from 'react-native';

// hooks
import {useIcon} from '../../hooks';

interface IIcon {
  name: string;
  size: number;
  focused?: boolean;
  color: string;
}

export default function Icon({name, size, focused, color}: IIcon) {
  const icon = useIcon(name);

  if (!name) {
    return <View style={{width: 22}} />;
  } else {
    return (
      <Svg
        // @ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={focused ? color : 'transparent'}
        viewBox="0 0 24 24"
        stroke={focused ? 'grey' : color}
        width={size}
        height={size}>
        <Path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={icon}
        />
      </Svg>
    );
  }
}
