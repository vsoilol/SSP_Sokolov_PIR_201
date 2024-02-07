import React, { useState } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Constants from "expo-constants";
import Button from "./components/button";
import AwesomeAlert from "react-native-awesome-alerts";

export default function App() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const hideAlert = () => {
    setIsAlertOpen(false);
  };

  const showAlert = () => {
    setIsAlertOpen(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>5 книжных новинок октября</Text>
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>
          "Кадиш.com" Натан Ингландер. Издательство "Книжники"
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Ироничная новелла Натана Ингландера, две личные истории культовой
          Патти Смит, репортаж британской журналистки о будущем человечества,
          дебютный роман Оушена Вуонга и журналистское расследование о создании
          «Моссада». В нашей подборке рассказываем о пяти захватывающих книжных
          новинках, которые достойны того, чтобы появиться на ваших полках.
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          onPress={showAlert}
          onLongPress={showAlert}
          title="Читать далее"
          style={styles.btn}
          textStyle={styles.btnText}
          activeOpacity={0.8}
        />
      </View>

      <AwesomeAlert
        show={isAlertOpen}
        showProgress={false}
        message="Подробная информация..."
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={false}
        showConfirmButton={true}
        confirmText="Закрыть"
        messageStyle={styles.alertText}
        confirmButtonTextStyle={styles.alertConfirmButtonText}
        confirmButtonColor="#000000"
        onConfirmPressed={hideAlert}
        onDismiss={hideAlert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  header: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#121212",
  },
  title: {
    flex: 2,
    backgroundColor: "#a9a9a9",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "normal",
    color: "#121212",
  },
  content: {
    flex: 4,
    backgroundColor: "#808080",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  contentText: {
    fontSize: 16,
    textAlign: "justify",
    color: "#121212",
  },
  btnContainer: {},
  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    backgroundColor: "#121212",
  },
  btnText: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#fff",
    textTransform: "uppercase",
  },
  alertText: {
    color: "#000000",
  },
  alertConfirmButtonText: {
    textTransform: "uppercase",
  },
});
