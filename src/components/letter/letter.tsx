import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

interface LetterProps {
  letter: string;
}

const Letter = ({ letter }: LetterProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{letter}</Text>
    </View>
  );
};

export default Letter;
