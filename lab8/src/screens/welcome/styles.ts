import { COLORS, FORM_PADDING_HORIZONTAL } from '@src/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: FORM_PADDING_HORIZONTAL,
    marginTop: '35%',
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: COLORS.RED,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontFamily: 'MontserratSemiBold',
  },
});

export default styles;
