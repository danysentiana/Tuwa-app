import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

export default function About() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user-circle" size={120} color="grey" />
        <Text style={styles.desc}>Dany Sentiana</Text>
        <Text>React Native Developer</Text>
      </View>

      <View style={{ alignItems: "center", backgroundColor: "#ffde00", borderRadius: 5, height: 80, borderWidth: 1 }}>
        <Text>Hello my Name is Dany Sentiana</Text>
        <Text>everyone commonly called me dany</Text>
        <Text>I am very interested in the world of technology, </Text>
        <Text>especially in the field of computer science</Text>
      </View>

      <View style={styles.toolContainer}>
        <View style={styles.toolTitle}>
          <Text style={{ fontWeight: "bold", borderBottomWidth: 1 }}>Tools</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
          <View style={styles.tools}>
            <TouchableOpacity>
              <Ionicons name="logo-javascript" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>Java Script</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <AntDesign name="HTML" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>HTML</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <Ionicons name="logo-css3" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>CSS</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="language-java" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>Java</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <View style={styles.tools}>
            <TouchableOpacity>
              <Fontisto name="mysql" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>MYSQL</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <FontAwesome name="wordpress" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>Wordpress</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="bootstrap" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>Bootstrap</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <Ionicons name="logo-react" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>React</Text>
          </View>
        </View>
      </View>

      <View style={styles.toolContainer}>
        <View style={{ marginTop: 20, alignItems: "center", marginBottom: 10 }}>
          <Text style={{ fontWeight: "bold", borderBottomWidth: 1 }}>My Project</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <View style={styles.tools}>
            <TouchableOpacity>
              <MaterialCommunityIcons name="gitlab" size={34} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>@dsentiana</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <AntDesign name="github" size={34} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>codesant</Text>
          </View>
          <View style={styles.tools}>
            <TouchableOpacity>
              <FontAwesome name="whatsapp" size={34} color="black" />
            </TouchableOpacity>
            <Text style={styles.toolsName}>082114706081</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
    height: 220,
  },

  desc: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    borderBottomWidth: 2,
  },
  tools: {
    flex: 1,
    alignItems: "center",
  },
  toolsName: {
    textAlign: "center",
    fontSize: 11,
  },
  toolTitle: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
});
