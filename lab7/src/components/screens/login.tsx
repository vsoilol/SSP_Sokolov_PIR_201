import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useAppNavigation } from "@hooks/use-app-navigation";

export const Login = () => {
  const navigation = useAppNavigation();

  return (
    <View>
      <Text>Login</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
    </View>
  );
};
