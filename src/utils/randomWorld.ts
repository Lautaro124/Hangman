import {words} from '../constants/word';

function getRandomWord() {
  const indexRandom = Math.floor(Math.random() * words.length);
  return words[indexRandom];
}

export default getRandomWord;
