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
  const [email, setEmail] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/4.png')} />
      <Text style={styles.txt}>Set Password</Text>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#c0c0c0"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Password."
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(newpassword) => setNewPassword(newpassword)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password."
          placeholderTextColor="#c0c0c0"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity style={styles.pswrdBtn}>
        <Text style={styles.pswrdText}>Reset Password</Text>
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
    marginBottom: 20,
    width:180,
    height:180,
  },
 
  txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
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
    marginLeft: 20,
  },
 
  pswrdBtn: {
    width: "80%",
    borderRadius: 0,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#087830",

  },

  pswrdText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20
  }
});
