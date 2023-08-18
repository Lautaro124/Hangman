import React from 'react';
import { TextInput } from 'react-native';
import style from './style';

interface InputProps {
  value: string;
  maxLength: number;
  onChangeText: (text: string) => void;
}

const Input = ({ value, maxLength, onChangeText }: InputProps) => {
  return (
    <TextInput
      value={value}
      maxLength={maxLength}
      style={style.input}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
