import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const ValContact = ({ id, contactItem, navigation, removeData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("Detail", { id: id })}>
            <Text style={styles.name}>{contactItem.name}</Text>
          </TouchableOpacity>
          <Text style={styles.number}>Phone: {contactItem.number}</Text>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate("Detail", { id: id })}>
            <MaterialCommunityIcons name="details" size={15} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => removeData(id)}>
            <AntDesign name="close" size={15} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ValContact;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffde00",
  },
  card: {
    padding: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 1,
    flexDirection: "row",
  },
  name: {
    fontWeight: "bold",
    fontSize: 15,
  },
  cards: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    alignItems: "center",
    height: 25,
    width: 25,
    backgroundColor: "#ffde00",
    justifyContent: "center",
    borderRadius: 5,
    marginRight: 3,
    borderWidth: 0.5,
  },
});
