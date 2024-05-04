import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import RenderMeal from "../Components/RenderMeal";

const Recipes=({route,navigation})=>{
   
const name=route.params.name;
const catId=route.params.catId;
////////
const displayedMeals=MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0;
})//////
const renderRecipe=(itemData)=>{
    
    return <RenderMeal title={itemData.item.title} 
    aff={itemData.item.affordability.toUpperCase()} 
    comp={itemData.item.complexity.toUpperCase()} 
    dur={itemData.item.duration}
    url={itemData.item.imageUrl}
    id={itemData.item.id}
    
    />


}
//////////

    return(
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={renderRecipe} ItemSeparatorComponent={()=>{
                return(
                    <View style={{height:16}}></View>
                )
            }}/>
        </View>
    )

};
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:16,
        padding:16,
        

    },
})







export default Recipes;

