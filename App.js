import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Recipes from './Screens/Recipes';
import Details from './Screens/Details';
const Stack=createNativeStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar style='light' />
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle:{backgroundColor:'#3F4F4C'},
        contentStyle:{backgroundColor:'#EAF8E3'},
        headerTintColor:'white'
        }}>
        <Stack.Screen name='categories' component={CategoriesScreen} />
        <Stack.Screen name='Recipes' component={Recipes} />
        <Stack.Screen name='Details' component={Details} />


      </Stack.Navigator>

 
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
