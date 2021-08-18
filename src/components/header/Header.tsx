// packages
import React from 'react';

// styles
import {ButtonHeader, HeaderContainer, Title} from './style';

// components
import {Icon} from '../index';

interface IHeader {
  actionLeft?: () => void;
  actionRight?: () => void;
  title: string;
  navigation: any;
  backgroundColor?: string;
}

export default function Header({
  actionLeft,
  title,
  actionRight,
  navigation,
  backgroundColor,
}: IHeader) {
  const handleRightAction = () => {
    navigation.navigate('Camera');
  };

  const handleLeftAction = () => {
    navigation.goBack();
  };

  return (
    <HeaderContainer color={backgroundColor}>
      <ButtonHeader onPress={actionLeft ? actionLeft : handleLeftAction}>
        <Icon
          name={actionLeft ? 'drawer' : 'left'}
          size={22}
          color="white"
          focused={false}
        />
      </ButtonHeader>
      <Title>{title}</Title>
      <ButtonHeader onPress={actionRight ? actionRight : handleRightAction}>
        <Icon
          name={actionLeft ? 'camera' : ''}
          size={22}
          color="white"
          focused={false}
        />
      </ButtonHeader>
    </HeaderContainer>
  );
}
