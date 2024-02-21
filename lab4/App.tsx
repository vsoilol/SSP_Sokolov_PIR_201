import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import Slider from '@components/slider';
import Button from '@components/button';
import globalStyles from '@core/global-styles';
import { MAX_WIDTH } from '@src/constants';

export default function App() {
  const showAlert = () =>
    Alert.alert('Заказ', 'Заказ оформлен', [{ text: 'Ок' }]);

  return (
    <SafeAreaView style={[globalStyles.droidSafeArea, styles.container]}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={true}
        persistentScrollbar={true}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Магазин</Text>
        </View>
        <Slider />
        <View style={styles.form}>
          <Text style={styles.formTitle}>Введите свои данные</Text>
          <TextInput
            style={styles.input}
            placeholder="Какие-то данные"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Какие-то данные"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Какие-то данные"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Какие-то данные"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Какие-то данные"></TextInput>
        </View>
        <Button
          onPress={showAlert}
          onLongPress={showAlert}
          title="Оформить"
          style={styles.btn}
          textStyle={styles.btnText}
          activeOpacity={0.8}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    margin: 'auto',
    justifyContent: 'space-between',
    maxWidth: MAX_WIDTH,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 5,
    textTransform: 'uppercase',
  },
  form: {
    padding: 20,
    rowGap: 10,
  },
  formTitle: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#121212',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#fff',
    textTransform: 'uppercase',
  },
});
