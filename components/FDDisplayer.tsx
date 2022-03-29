import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { FAB, Provider } from "react-native-paper";
import SingleFDInfo from "./SingleFDInfo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const FDDisplayer = ({ navigation }) => {
  const data = [
    {
      number: 1,
      value: 1000000,
      owner: "Wasantha",
      bank: "NSB",
      maturitydate: "2021-10-12",
      intrest: 10,
    },
    {
      number: 2,
      value: 500,
      owner: "Wasantha",
      bank: "NSB",
      maturitydate: "2021-10-12",
      intrest: 12,
    },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
    { number: 2, value: 500 },
  ];
  return (
    <View style={styles.MainContainer}>
      <ScrollView>
        {data.map((item) => (
          <SingleFDInfo
            fdNumber={item.number}
            fdValue={item.value}
            bankName={item.bank}
            maturityDate={item.maturitydate}
            intrest={item.intrest}
          ></SingleFDInfo>
        ))}
      </ScrollView>
      <FAB
        icon="plus"
        style={styles.addButton}
        onPress={() => navigation.navigate("Create")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 10,
  },
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  addButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    // borderRadius: 50,
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default FDDisplayer;
