import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native';

const App = ({navigation}) => {

    const Header = () => {
      return(
        <View style={styles.head}>
          <Text style={styles.txt}>DASHBOARD</Text>
        </View>
      )
    }

    const Boxes = () => {
      return(
        
        <View style={styles.boxContain}>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.fuel} onPress={() => navigation.navigate('Gas')}>LP GAS</Text>
            </TouchableOpacity>
          </View>
          </View>

          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.fuel}>LIVE QUEUE MAP</Text>
              </TouchableOpacity>
          </View>
          </View>
          <View style={styles.boxinside}>
          <View style={styles.boxing}>
            <TouchableOpacity>
              <Text style={styles.fuel}>NOTIFICATIONS</Text>
            </TouchableOpacity>
          </View>
          </View>
        </View>
        
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
    backgroundColor: '#76ff7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 20
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
    height: '30%',
    width: '100%',
    padding: 5,
    backgroundColor: '#000000'
  },
  boxing: {
    flex: 1,
    backgroundColor: '#ffff00',
    alignItems: 'center'
  },
  fuel: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 65
  },

});

export default App;