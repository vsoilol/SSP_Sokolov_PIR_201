import { Alert, StyleSheet, ScrollView, View } from "react-native";

import Question from "./components/question";
import Button from "./components/button";

const answers = ["Ответ 1", "Ответ 2", "Ответ 3"];

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Question question="Вопрос 1" answers={answers} />
        <Question question="Вопрос 2" answers={answers} />
        <Question question="Вопрос 3" answers={answers} />

        <Button
          title="Завершить"
          onPress={() => {
            Alert.alert("Анкетирование завершено");
          }}
          activeOpacity={0.8}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%",
  },
  wrapper: {
    padding: 30,
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "flex-start",
  },
});
