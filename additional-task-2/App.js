import { StyleSheet, View } from "react-native";
import MyComponent from "./components/my-component/my-component";

export default function App() {
  return (
    <View style={styles.container}>
      <MyComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
