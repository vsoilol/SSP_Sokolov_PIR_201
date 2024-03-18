import { COLORS, FORM_PADDING_HORIZONTAL } from '@src/constants';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: FORM_PADDING_HORIZONTAL,
  },
  title: {
    fontSize: 25,
    marginBottom: 10,
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
  },
  form: {
    width: '100%',
    rowGap: 20,
  },
  button: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: COLORS.GREEN,
  },
  buttonText: {
    fontFamily: 'MontserratSemiBold',
  },
});

export default styles;
