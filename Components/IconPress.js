import { Pressable, View,Text, StyleSheet } from "react-native";
import{Ionicons} from'@expo/vector-icons'

const IconPress=({ icon,onPress,color})=>{
   
    return(
   
        <Pressable onPress={onPress} android_ripple={{color:'#ccc'}}>
            <Ionicons name={icon} size={24} color={color}/>
        </Pressable>
    
    )

};
const styles=StyleSheet.create({
    emoji:{
        fontSize:18
    },

})




export default IconPress;