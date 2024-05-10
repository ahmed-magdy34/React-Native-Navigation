import { View,FlatList,StyleSheet } from "react-native";
import RenderMeal from "./RenderMeal";


const MealsList=({items})=>{
    const renderRecipe=(itemData)=>{
    
        return <RenderMeal 
        title={itemData.item.title}
         aff={itemData.item.affordability.toUpperCase()} 
        comp={itemData.item.complexity.toUpperCase()} 
        dur={itemData.item.duration}
        url={itemData.item.imageUrl}
        id={itemData.item.id}/>
    }
    return(
        <View style={styles.container}>
            <FlatList data={items} keyExtractor={(item)=> item.id} renderItem={renderRecipe} ItemSeparatorComponent={()=>{
                return(
                    <View style={{height:16}}></View>
                )
            }}/>
        </View>
    )

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:16,
        padding:16,
        

    },
})
export default MealsList;