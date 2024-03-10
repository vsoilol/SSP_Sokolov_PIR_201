import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Navigator } from "@components/navigations";
import { useFonts } from "expo-font";
import { useEffect } from "react";

export default function App() {
  let [fontsLoaded] = useFonts({
    SemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    Medium: require("./assets/fonts/Montserrat-Medium.ttf"),
    Regular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });

  useEffect(() => {
    console.log(fontsLoaded);
  }, [fontsLoaded]);

  return <Navigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
