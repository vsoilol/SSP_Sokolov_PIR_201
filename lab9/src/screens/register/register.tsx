import { Alert, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@components/button';
import CustomTextInput from '@components/custom-text-input';

import { COLORS } from '@src/constants';

import styles from './styles';
import globalStyles from '@core/global-styles';
import { useAppNavigation } from '@hooks/use-app-navigation';

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

export const Register = () => {
  const navigation = useAppNavigation();

  const handleSubmit = (values: FormValues) => {
    navigation.navigate('Home');
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Почта введена некорректно')
      .required('Это поле обязательно для заполнения'),
    password: Yup.string()
      .required('Это поле обязательно для заполнения')
      .min(8, 'Пароль слишком короткий - должен содержать минимум 8 символов.'),
    passwordConfirmation: Yup.string()
      .required('Это поле обязательно для заполнения')
      .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
  });

  return (
    <View style={styles.registerContainer}>
      <Text style={[globalStyles.textSemiBold, styles.title]}>Регистрация</Text>
      <Text style={[globalStyles.textRegular, styles.description]}>
        Введите, пожалуйста, свои персональные данные для дальнейшей
        персонализации. Это необходимо только один раз.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {formik => (
          <View style={styles.form}>
            <CustomTextInput
              borderColor={COLORS.GREEN}
              name="email"
              placeholder="Email"
              icon="mail"
            />
            <CustomTextInput
              borderColor={COLORS.GREEN}
              name="password"
              placeholder="Пароль"
              icon="lock"
              secureTextEntry={true}
            />
            <CustomTextInput
              borderColor={COLORS.GREEN}
              name="passwordConfirmation"
              placeholder="Пароль ещё раз"
              icon="lock"
              secureTextEntry={true}
            />

            <Button
              title="Регистрация"
              onPress={() => {
                formik.submitForm();
              }}
              style={styles.button}
              textStyle={styles.buttonText}
              activeOpacity={0.8}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
