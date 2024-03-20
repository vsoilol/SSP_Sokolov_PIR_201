import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default Question = ({ question, answers }) => {
  const [checked, setChecked] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>

      <RadioButton.Group
        onValueChange={(newValue) => setChecked(newValue)}
        value={checked}
      >
        {answers.map((answer, index) => (
          <View key={index} style={styles.radioButtonContainer}>
            <RadioButton value={answer} />
            <Text>{answer}</Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  question: {
    fontSize: 17,
    fontWeight: "bold",
  },

  radioButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
