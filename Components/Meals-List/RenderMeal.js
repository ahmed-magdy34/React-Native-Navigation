import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RenderMeal=({title, aff,comp,dur,id,url,})=>{
    const navigation=useNavigation();
   const pressHandle= ()=>{
        navigation.navigate('Details',{mealId:id})
    }
    
    return(
        <View style={styles.container}>
            <Pressable android_ripple={{color:'#ccc'}} onPress={pressHandle}>
                <View>
            <Image source={{uri:url}} style={styles.image}/>
            <Text style={styles.title}>{title}</Text>
            
                </View>
                <View style={styles.details}>

            <Text style={styles.text2}>{aff}</Text>
            <Text style={styles.text2}>{comp}</Text>
           <Text style={styles.text2}>{dur} Minutes</Text>
                </View>
                {/* <View>

            <Text style={styles.text1}> Ingredients: <Text style={styles.text2}>{ing}</Text> </Text>
                </View> */}
            </Pressable>
        </View>
    )


};
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    },
   
    text2:{
        fontSize:15,
        fontWeight:'normal',
        paddingHorizontal:4

    },
    container:{
        margin:16,
        borderRadius:10,
        backgroundColor:'#F4F8E3',
        overflow:'hidden',
        elevation:5
    },
    title:{
        textAlign:'center',
        fontSize:20,
        margin:8,
        fontWeight:'bold'

    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    }
})





export default RenderMeal;