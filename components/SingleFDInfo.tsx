import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { List, Badge } from "react-native-paper";
import {
  black,
  grey100,
} from "react-native-paper/lib/typescript/styles/colors";

type props = {
  fdNumber: number;
  fdValue: number;
  bankName: string;
  maturityDate: Date;
};

const SingleFDInfo = (props: {
  fdNumber: number;
  fdValue: number;
  bankName: string;
  maturityDate: Date;
  intrest: number;
}) => {
  return (
    <View>
      <TouchableOpacity>
        {/* <View style={styles.container}> */}
        {/* <View style={styles.monthBox}>
            <Text>Maturity Date : {props.maturityDate}</Text>
          </View> */}
        <View style={styles.box}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 15, fontFamily: "monospace", padding: 1 }}>
              Fd Number : {props.fdNumber}
            </Text>
            <Text
              style={{
                fontSize: 16,
                padding: 1,
                fontFamily: "monospace",
              }}
            >
              Bank : {props.bankName}
            </Text>
            <Text style={{ fontFamily: "monospace" }}>{props.intrest}%</Text>
          </View>
          <View style={styles.fdValueBox}>
            <Text style={styles.fdValue}>
              Rs. {props.fdValue.toLocaleString()}
            </Text>
            <Text
              style={{
                textAlign: "right",
                padding: 3,
                fontFamily: "sans-serif",
                color: "#989898",
              }}
            >
              {props.maturityDate}
            </Text>
          </View>
        </View>
        {/* </View> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    // shadowOffset: { width: 1, height: 2 },
    shadowColor: "#000",
    shadowRadius: 4,
    elevation: 5,
    padding: 3,
    margin: 5,
  },
  box: {
    flexDirection: "row",
    flex: 5,
    borderBottomWidth: 1,
    // padding: 10,
    // margin: 5,
    marginTop: 0,
    // borderRadius: 20,
    // borderTopLeftRadius: 0,
    // boder
    // shadowOffset: { width: 1, height: 2 },
    // shadowColor: "#000",
    // shadowRadius: 4,
    // elevation: 5,
    // backgroundColor: "#bbd91c",
    // borderColor: "black",
    // borderStyle: "solid",
    // borderBottomWidth: 2,
  },
  monthBox: {
    flex: 1,
    height: "30%",
    // shadowOffset: { width: 1, height: 2 },
    // shadowColor: "#000",
    // shadowRadius: 4,
    elevation: 5,
    // margin: 5,
    marginBottom: 0,
    padding: 10,
    backgroundColor: "#f5a8f6",
    borderTopLeftRadius: 20,
    // borderTopRightRadius: 10,
    width: "80%",
  },
  fdValueBox: {
    backgroundColor: "#bbd91c",
    alignContent: "flex-end",
    flex: 1,
  },
  fdValue: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "right",
  },
});
export default SingleFDInfo;
