import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  screenContainer: {flex: 1, backgroundColor: '#F4A261'},
  lettersContainer: {
    flex: 4,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 4,
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default style;
