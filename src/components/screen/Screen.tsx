//packages
import React from 'react';

//styles
import {SafeArea, ScreenContainer, Bar} from './style';

// @ts-ignore
export default function Screen({children}: any) {
  return (
    <SafeArea
      // @ts-ignore
      backgroundColor="blue">
      <Bar backgroundColor="blue" barStyle="light-content" />
      <ScreenContainer>{children}</ScreenContainer>
    </SafeArea>
  );
}
