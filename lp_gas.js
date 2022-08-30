import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput,Image} from 'react-native';
import { ScrollView } from 'react-native';



const App = ({navigation}) => {
    const Header = () => {
      return(
        <View style={styles.head}>
          <Text style={styles.txt}>LP GAS</Text>
        </View>
      )
    }

    const Boxes = () => {
      
      return(
        <ScrollView>
        <View style={styles.boxContain}>
          <View style={styles.boxinside}>
          <View style={styles.boxing1}>
            <TouchableOpacity >
              <Text style={styles.cater} onPress={() => navigation.navigate('Litro')}>Litro - 5Kg</Text>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.boxinside}>
          <View style={styles.boxing1}>
            <TouchableOpacity>
              <Text style={styles.cater}>Litro - 12.5Kg</Text>
              </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing1}>
            <TouchableOpacity>
              <Text style={styles.cater}>Litro - 37.5Kg</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing2}>
            <TouchableOpacity>
              <Text style={styles.cater1} onPress={() => navigation.navigate('Detail')}>Laugfs - 5Kg</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing2}>
            <TouchableOpacity>
              <Text style={styles.cater1}>Laugfs - 12.5Kg</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing2}>
            <TouchableOpacity>
              <Text style={styles.cater1}>Laugfs - 37.5Kg</Text>
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing2}>
            <TouchableOpacity>
              <Text style={styles.cater}></Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        </ScrollView>
      )
    }

    return(
      <SafeAreaView style={styles.container}>
        <Header/>
        <Boxes/>
      </SafeAreaView>
    );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    width: '100%',
    height: '15%',
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  txt: {
    paddingTop: 25,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#800000',
  },
  boxContain: {
    width: '100%',
    height: '85%',
    backgroundColor: '#fff',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  boxinside: {
    height: '20%',
    width: '100%',
    padding: 5,
    backgroundColor: '#dbd7d2'
  },
  boxing1: {
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    borderRadius: 20
  },
  boxing2: {
    flex: 1,
    backgroundColor: '#ffd700',
    alignItems: 'center',
    borderRadius: 20
  },
  cater: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 25,
    color: '#fff',
  },
  cater1: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 25,
    color: '#000',
  },
  inputcontainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fddde6',
    alignItems: 'center',
    paddingHorizontal: 20
},
srtbtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: '#ff1493',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
},

});

export default App;


