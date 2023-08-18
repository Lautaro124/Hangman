import React, { useMemo } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import getRandomWord from '../../utils/randomWorld';
import { useState } from 'react';
import Input from '../../components/input/input';
import style from './style';
import Letter from '../../components/letter/letter';

const Home = () => {
  const word = useMemo(() => getRandomWord().split(''), []);
  const [answerWord, setWord] = useState<string>('');

  return (
    <SafeAreaView style={style.screenContainer}>
      <Text style={style.title}>Welcome to the Hangman game</Text>
      <View style={style.lettersContainer}>
        {word.map((letter, index) => (
          <Letter key={index} letter={letter} />
        ))}
      </View>
      <View style={style.inputContainer}>
        <Input
          value={answerWord}
          maxLength={word.length}
          onChangeText={setWord}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
