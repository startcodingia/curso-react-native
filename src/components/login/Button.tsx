//pakcages
import React from 'react';

// styles
import {Button, TextButton} from './style';

interface IButtonComponent {
  title: string;
  onPress: () => void;
}

export default function ButtonComponent({title, onPress}: IButtonComponent) {
  return (
    <Button onPress={onPress}>
      <TextButton>{title}</TextButton>
    </Button>
  );
}
