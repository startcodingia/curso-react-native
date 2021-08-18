// packages
import React from 'react';

//styles
import {FlagSide, FlagContainer, Shield} from './style';

interface IFlag {
  color?: string;
  leftColor?: string;
  rightColor?: string;
  shieldColor?: string;
}

export default function Flag({
  color,
  leftColor,
  rightColor,
  shieldColor,
}: IFlag) {
  return (
    <FlagContainer background={color}>
      <FlagSide background={leftColor} />
      <Shield background={shieldColor} />
      <FlagSide background={rightColor} />
    </FlagContainer>
  );
}
