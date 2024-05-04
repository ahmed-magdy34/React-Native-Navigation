import { Pressable, Text, View,StyleSheet,StatusBar } from "react-native";

const CategoryGrid = ({ title, color,onPress,id }) => {
  return (
    <View style={[styles.gridItem,{backgroundColor:color}]}>
      <Pressable style={{flex:1}} android_ripple={{color:'#ccc'}} onPress={onPress}>
        <View style={styles.innerGrid}>
          <Text style={styles.text}>{title} </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGrid;
const styles = StyleSheet.create({
gridItem: {
      flex: 1,
      elevation:12,
      margin:16,
      borderRadius:8,
      borderWidth:1,
      height:150,
      marginTop:StatusBar.currentHeight,
      backgroundColor:'white',
    
    },
    innerGrid:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:16,
      
    },
    text:{
      fontSize:18,
      fontWeight:'bold'
    },
  });