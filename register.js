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
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/4.png')} />
        <Text style={styles.gas}>SL GAS APP</Text>
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
          placeholder="City"
          placeholderTextColor="#c0c0c0"
          onChangeText={(city) => setCity(city)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#c0c0c0"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.SignBtn}>
        <Text style={styles.signText}>REGISTER</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#76ff7a",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginTop:30,
    marginBottom: 10,
    width:150,
    height:150,
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
    backgroundColor: "#087830",
  },

  signText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20
  }
});
