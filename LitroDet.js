import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';


const App = ({navigation}) => {

    const Boxes = () => {
      return(
        <View style={styles.boxContain}>
          <View style={styles.content5}>
            <Text style={styles.content4}>Litro - 5Kg</Text>
          </View>
            <Text style={styles.content1}>** Type : Litro</Text>
            <Text style={styles.content}>** Weight : 5Kg</Text>
            <Text style={styles.content}>** Price : Rs.1100</Text>
            <Text style={styles.content}>** Main Places</Text>
            <Text style={styles.content3}>Highway Centre</Text>
            <Text style={styles.content3}>AI GAS Point - Litro Gas Dealer</Text>
            <Text style={styles.content3}>Padukka Gas Center</Text>
        </View>
      )
    }

    return(
      <SafeAreaView style={styles.container}>
        <Boxes/>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('check')}>
            <Text style={styles.btntxt}>Check Availabality</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#76ff7a'
  },
  boxContain:{
      padding:10,
      height:'80%',
      width:"100%",
      backgroundColor:'#deb887',
      borderRadius: 50,
      elevation:13
  },
  btn:{
    width: "80%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginLeft: 35,
    backgroundColor: "#000",
    elevation:15
  },
  btntxt:{
      color:'#fff',
      fontSize:21,
      fontWeight:'bold',
      fontFamily:'monospace'
  },
  content1:{
    fontSize:20,
    marginTop:50,
    paddingLeft:30
  },
  content:{
    fontSize:20,
    marginTop:10,
    paddingLeft:30
  },
  content3:{
    fontSize:17,
    marginTop:10,
    paddingLeft:70
  },
  content5:{
    marginTop:30,
    height:'10%',
    width:'100%',
    backgroundColor:'#800000',
    borderRadius:50
  },
  content4:{
    fontSize:25,
    marginTop:10,
    paddingLeft:100,
    fontWeight:'bold',
    color:'#fff'
  },
  



 
});

export default App;