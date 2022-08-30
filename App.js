import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import check from './components/check';
import checklaufs from './components/checklaufs';
import Dashboard from './components/Dashboard';
import fgtpswrd from './components/fgtpswrd';
import HomeScreen from './components/HomeScreen';
import LitroDet from './components/LitroDet';
import login from './components/login';
import lp_gas from './components/lp_gas';
import register from './components/register';
import laufsDet from './components/laufsDet';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={register} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={login} options={{ headerShown: false }}/>
        <Stack.Screen name="Forget" component={fgtpswrd} options={{ headerShown: false }}/>
        <Stack.Screen name="Dash" component={Dashboard} options={{ headerShown: false }}/>
        <Stack.Screen name="Litro" component={LitroDet} options={{title: '', 
            headerStyle: {
                backgroundColor: '#76ff7a' }, 
                headerTintColor: '#000',         
            }} />
        <Stack.Screen name="Gas" component={lp_gas} options={{ headerShown: false }}/>
        <Stack.Screen name="check" component={check} options={{ headerShown: false }}/>
        <Stack.Screen name="laufs" component={checklaufs} options={{ headerShown: false }}/>
        <Stack.Screen name="Detail" component={laufsDet} options={{title: '', 
            headerStyle: {
                backgroundColor: '#007f66' }, 
                headerTintColor: '#fff',         
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;