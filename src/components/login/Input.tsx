// packages
import React, {Dispatch, SetStateAction} from 'react';

// styles
import {
  InputWrapper,
  InputText,
  InputContainer,
  IconContainer,
  Label,
  ErrorMessage,
} from './style';

//components
import Icon from '../svg/Icon';

interface IInput {
  name: string;
  value: string;
  onChangeText: Dispatch<SetStateAction<string>>;
  placeholder: string;
  onFocus: () => void;
  onBlur: () => void;
  errorMessage: string;
  type: string;
}

export default function Input({
  name,
  value,
  onChangeText,
  placeholder,
  onFocus,
  onBlur,
  errorMessage,
  type,
}: IInput) {
  return (
    <>
      <Label>{name}</Label>
      <InputWrapper>
        <IconContainer>
          <Icon name={name} size={22} color="grey" />
        </IconContainer>
        <InputContainer>
          <InputText
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={type === 'mail' ? 'email-address' : 'default'}
            secureTextEntry={type !== 'mail'}
          />
        </InputContainer>
      </InputWrapper>
      <ErrorMessage>{errorMessage ? errorMessage : ''}</ErrorMessage>
    </>
  );
}
