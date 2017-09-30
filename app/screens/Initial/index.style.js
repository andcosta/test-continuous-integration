import { StyleSheet } from 'react-native';
import GlobalStyle from '../../global/Style';

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyle.appBackgroundColor
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    textAlign: 'center'
  }
}));
