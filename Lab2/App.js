import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import { Text, StyleSheet, View, Button, Image, Platform } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main_view}>
        <View style={styles.header}>
          <Text style={styles.title}>Журнал Bright</Text>
        </View>

        <View style={styles.main}>
          <View style={styles.link_view}>
            <Text style={styles.link}>Новости</Text>
          </View>

          <View style={styles.content}>
            <View>
              <Image
                style={styles.img}
                source={{
                  uri: "https://brightmagazine.ru/wp-content/uploads/2024/02/parabol-the-agile-meeting-toolbox-BDfQnva_6mU-unsplash-600x400.jpg",
                }}
              />
            </View>
            <View>
              <Text style={styles.article_title}>
                Доска видения — отличный инструмент для достижения
                профессиональных целей
              </Text>
            </View>
            <View>
              <Text style={styles.article_text}>
                Представить, каким проект должен быть в конечном итоге, чтобы
                шаг за шагом следовать за этим маяком. Сегодня говорим об
                эффективном рабочем инструменте — доске видения.
              </Text>
            </View>
          </View>

          <View style={styles.button_view}>
            <Button title="Читать далее" />
          </View>
        </View>
        <StatusBar style="auto" backgroundColor="#ecf0f1" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  main_view: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: "#ecf0f1",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",

    fontSize: 17,
  },
  main: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    width: "100%",
    maxWidth: 500,
  },
  content: {
    rowGap: 10,
  },
  link: {
    color: "blue",
  },
  link_view: {
    paddingVertical: 20,
  },

  img: {
    height: 200,
  },
  article_title: {
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 20,
  },
  article_text: {
    fontSize: 12,
    lineHeight: 17,
  },
  button_view: {
    flexDirection: "column",
    width: "100%",
    marginVertical: 15,
  },
});

export default App;
