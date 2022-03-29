import React from "react";
import { KeyboardTypeOptions, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

type props = {
  lable: string;
  disabled?: boolean;
  type?: KeyboardTypeOptions;
};
const CustomInput = ({ lable, disabled = false, type = "default" }: props) => {
  let keyBoradType: KeyboardTypeOptions = type as KeyboardTypeOptions;
  return (
    <TextInput
      style={styles.input}
      label={lable}
      disabled={disabled}
      keyboardType={keyBoradType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    alignSelf: "center",
    margin: 10,
  },
});

export default CustomInput;
