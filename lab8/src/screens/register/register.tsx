import { Text, View } from 'react-native';
import { Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import Button from '@components/button';
import ScreenLink from '@components/screen-link';
import CustomTextInput from '@components/custom-text-input';
import { useAppNavigation } from '@hooks/use-app-navigation';

import { COLORS } from '@src/constants';

import styles from './styles';
import globalStyles from '@core/global-styles';
import { RegisterProps } from '@my-types/route';
import { useRef } from 'react';
import { IUserCredentials } from '@my-types/user-credentials.interface';

interface FormValues {
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const Register = ({ route }: RegisterProps) => {
  const navigation = useAppNavigation();
  const ref = useRef<FormikProps<FormValues>>(null);

  const onNavigateLogin = () => {
    const value = ref.current!.values;

    const userCredentials: IUserCredentials = {
      login: value.email,
      password: value.password,
    };

    navigation.navigate('Login', { userCredentials: userCredentials });
  };

  const initialValues =
    route.params?.userCredentials !== undefined
      ? {
          email: route.params?.userCredentials.login,
          password: route.params?.userCredentials.password,
          passwordConfirmation: route.params?.userCredentials.password,
        }
      : { email: '', password: '', passwordConfirmation: '' };

  const handleSubmit = (values: FormValues) => {
    navigation.navigate('Welcome', {
      userCredentials: { login: values.email, password: values.password },
    });
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
        innerRef={ref}
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

      <View style={styles.linkContainer}>
        <ScreenLink
          onNavigate={onNavigateLogin}
          screenName="Login"
          linkColor={COLORS.RED}
          text="Войти"
        />
      </View>
    </View>
  );
};
