import { View,Text, StyleSheet } from "react-native";

const List=({data})=>{
    return(
        data.map((dataPoint)=>(
           <View key={dataPoint} style={styles.listItem}>
             <Text style={{textAlign:'center'}} >{dataPoint}</Text>

           </View>
        ))
    )
};

const styles=StyleSheet.create({
    listItem:{
        borderRadius:6,
        borderWidth:1,
        paddingHorizontal:8,
        paddingVertical:4,
        marginHorizontal:12,
        marginVertical:4,
        backgroundColor:'#F4F8E3',
        
    },
})

export default List;