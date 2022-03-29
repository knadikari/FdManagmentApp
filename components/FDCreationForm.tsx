import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import CustomInput from "./FdDataInput";

type props = {
  isupdate?: boolean;
};

enum duration {
  "1M" = 1,
  "3M" = 3,
  "6M" = 6,
  "1Y" = 12,
  "2Y" = 24,
  "5Y" = 60,
}

const FDCreationForm = ({ isupdate = false }: props) => {
  const [visibility, setVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View>
        <CustomInput lable="FD Number" type="numeric" disabled={isupdate} />
        <CustomInput lable="Bank Name" disabled={isupdate} />
        <CustomInput lable="Intrest" type="numeric" />
        <CustomInput lable="Starting Date" />
        <CustomInput lable="Time Period" />
      </View>
      <Button mode="contained" icon="camera">
        SUBMIT
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default FDCreationForm;
