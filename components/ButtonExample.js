import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-web";

const Separator = () => <View style={styles.separator} />;
const ButtonExample = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and Onpress handler are required .It is recommended to user
          usable by everyone
        </Text>
      </View>
      <Button title="Press Me" onPress={() => alert("Simple Button pressed")} />
      <Separator />
      <View>
        <Text style={styles.title}>
          The title and Onpress handler are required .It is recommended to user
          usable by everyone
        </Text>
      </View>
      <Button
        color="pink"
        title="Press Me"
        onPress={() => alert("Simple Button pressed")}
      />
      <Separator />
      <View>
        <Text style={styles.title}>
          The title and Onpress handler are required .It is recommended to user
          usable by everyone
        </Text>
      </View>
      <Button disabled title="Press Me" onPress={() => alert("Simple Button pressed")} />
      <Separator />
      <View>
        <Text style={styles.title}>
          The title and Onpress handler are required .It is recommended to user
          usable by everyone
        </Text>
      </View>
      <View style={styles.fixToText}>
      <Button
        title="Left button"
        onPress={() => alert("Left Button pressed")}
      />
      <Button
        title="Right button"
        onPress={() => alert("Right Button pressed")}
      />
      </View>
    </SafeAreaView>
  );
};

export default ButtonExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
