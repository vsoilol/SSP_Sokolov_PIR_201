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
import { useRef } from 'react';
import { IUserCredentials } from '@my-types/user-credentials.interface';
import { LoginProps } from '@my-types/route';

interface FormValues {
  email: string;
  password: string;
}

export const Login = ({ route }: LoginProps) => {
  const ref = useRef<FormikProps<FormValues>>(null);
  const navigation = useAppNavigation();

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

  const onNavigateRegister = () => {
    const value = ref.current!.values;

    const userCredentials: IUserCredentials = {
      login: value.email,
      password: value.password,
    };

    navigation.navigate('Register', { userCredentials: userCredentials });
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Почта введена некорректно')
      .required('Это поле обязательно для заполнения'),
    password: Yup.string()
      .required('Это поле обязательно для заполнения')
      .min(8, 'Пароль слишком короткий - должен содержать минимум 8 символов.'),
  });

  return (
    <View style={styles.loginContainer}>
      <Text style={[globalStyles.textSemiBold, styles.title]}>Авторизация</Text>
      <Text style={[globalStyles.textRegular, styles.description]}>
        Введите логин и пароль, который создавали ранее при регистрации
      </Text>

      <Formik
        innerRef={ref}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        {formik => (
          <View style={styles.form}>
            <CustomTextInput
              borderColor={COLORS.RED}
              name="email"
              placeholder="Email"
              icon="mail"
            />
            <CustomTextInput
              borderColor={COLORS.RED}
              name="password"
              placeholder="Пароль"
              icon="lock"
              secureTextEntry={true}
            />

            <Button
              title="Войти"
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
          onNavigate={onNavigateRegister}
          screenName="Register"
          linkColor={COLORS.GREEN}
          text="Зарегистрироваться"
        />
      </View>
    </View>
  );
};
