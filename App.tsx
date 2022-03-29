import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
// import FDCreationForm from "./components/FDCreationForm";
import FDDisplayer from "./components/FDDisplayer";
import FDCreationForm from "./components/FDCreationForm";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function FdDetailScreen({ navigation }) {
  return <FDDisplayer navigation={navigation} />;
}

function FDCreation() {
  return <FDCreationForm />;
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [fdNumber, setFdNumber] = useState<string>("");
  const [fds, setFds] = useState<string[]>([]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Details">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={FdDetailScreen} />
        <Stack.Screen name="Create" component={FDCreation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // return <FDDisplayer />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});
