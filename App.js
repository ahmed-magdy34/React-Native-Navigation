import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './Screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Recipes from './Screens/Recipes';
import Details from './Screens/Details';
import FavouriteScreen from './Screens/FavouriteScreen';
import {Ionicons} from '@expo/vector-icons'
const Stack=createNativeStackNavigator();
const Drawer=createDrawerNavigator();
/////////// Nesting Navigators/////////////
const DrawerNavigator=()=>{
  return <Drawer.Navigator screenOptions={{
    headerStyle:{backgroundColor:'#3F4F4C'},
    sceneContainerStyle:{backgroundColor:'#EAF8E3'},
    headerTintColor:'white'
    }}>
    <Drawer.Screen name='Categories' component={CategoriesScreen} options={{
      drawerIcon:({color,size})=><Ionicons color={color} size={size} name='list'/>
    }}/>
    <Drawer.Screen name='Favourites' component={FavouriteScreen} options={{
            drawerIcon:({color,size})=><Ionicons color={color} size={size} name='star'/>

    }}/>

  </Drawer.Navigator>
}
/////////////////////////

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
        <Stack.Screen name='Drawer' component={DrawerNavigator} options={{
          headerShown:false
        }} />
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
