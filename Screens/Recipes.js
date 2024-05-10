import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../Components/Meals-List/MealsList";


const Recipes=({route,navigation})=>{
   
const name=route.params.name;
const catId=route.params.catId;
////////
const displayedMeals=MEALS.filter((mealItem)=>{
    return mealItem.categoryIds.indexOf(catId)>=0;
})//////

//////////
return(
    <MealsList items={displayedMeals}/>
)



};








export default Recipes;

