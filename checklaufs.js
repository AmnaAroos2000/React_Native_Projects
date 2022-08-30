import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
 
export default function App() {
  const [name, setName] = useState("");
  const [city, setCityortown] = useState("");
  const [email, setweightofgas] = useState("");
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/vlogo.png')} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#c0c0c0"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="City or Town"
          placeholderTextColor="#c0c0c0"
          onChangeText={(cityortown) => setCityortown(cityortown)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Weight of Gas"
          placeholderTextColor="#c0c0c0"
          onChangeText={(weightofgas) => setWeightofgas(weightofgas)}
        />
      </View>
 
      <TouchableOpacity style={styles.SignBtn}>
        <Text style={styles.signText}>CHECK</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd700",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginTop:-50,
    marginBottom: 50,
    width:220,
    height:170,
    resizeMode:'cover'
  },

  gas: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom:20
  },
 
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 0,
    width: "70%",
    height: 45,
    marginBottom: 20,
    fontSize: 10,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 10,
  },
 
  SignBtn: {
    width: "80%",
    borderRadius: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    backgroundColor: "#ff7f50",
  },

  signText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize:20
  }
});
