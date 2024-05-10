import { StyleSheet, Text, View } from "react-native";
import MealsList from "../Components/Meals-List/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/Favourites-Context";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen=()=>{
    const favouritCtx=useContext(FavouritesContext);
    const favouriteMeals=MEALS.filter(meal=>favouritCtx.ids.includes(meal.id));
    if(favouriteMeals.length===0){
        return(
            <View style={styles.msgContainer}>
                <Text style={styles.text}>You have no favourite meals yet</Text>
            </View>
        )
    }
    return(
        <MealsList items={favouriteMeals}/>
    )

};
const styles=StyleSheet.create({
    msgContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        // color:'white'
    }

});
export default FavouriteScreen;