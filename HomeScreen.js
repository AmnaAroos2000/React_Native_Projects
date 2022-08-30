import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.mypic}
             source={require('../assets/4.png')}/>
      <Text style={styles.mytext1}>SL GAS APP</Text>
      <Text style={styles.para1}>Welcome To our APP</Text>
      <Text style={styles.para2}>We are always here to help you</Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} onPress={() => navigation.navigate('Register')}>REGISTER</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76ff7a', 
  },

  mypic: {
    marginTop: 130,
    marginLeft: 85,
    width: 180,
    height: 180,
  },

  para1: {
    color: 'green',
    paddingLeft: 105,
  },

  para2: {
    color: 'green',
    paddingLeft: 70,
  },

  mytext1: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'serif',
    paddingLeft: 80,
    paddingTop: 40,
  },

  mytext2: {
    paddingLeft: 40,
    paddingTop: 30,
    color: '#fc8eac'
  },

  mytext3: {
    paddingLeft: 40,
    color: '#fc8eac'
  },
  
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#087830",
    marginLeft: 30
  },

  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize:20
  }

});