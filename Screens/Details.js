import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View,ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import List from "../Components/List";
import IconPress from "../Components/IconPress";
import { FavouritesContext } from "../store/context/Favourites-Context";
const Details=({route,navigation})=>{
    const favouriteCtx=useContext(FavouritesContext)
    const mealId=route.params.mealId;
    const selectedMeal=MEALS.find((meal)=>meal.id===mealId);
    const isFavourite=favouriteCtx.ids.includes(mealId);
    const favPressHandler=()=>{
        if(isFavourite){
            favouriteCtx.removeFavourites(mealId)
        }else{
            favouriteCtx.addFavourites(mealId)
        }
    }
  
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return(
                    <IconPress icon={isFavourite?'star':'star-outline'} onPress={favPressHandler} color='white' />
                )
            }
        })
    },[navigation,favPressHandler])
    return(
        <ScrollView style={{marginBottom:16}}>
            <Image style={styles.image} source={{uri:selectedMeal.imageUrl}} resizeMode="contain"/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
           <View style={styles.details}>

             <Text style={styles.text2}>{selectedMeal.affordability.toUpperCase()}</Text>
             <Text style={styles.text2}>{selectedMeal.complexity.toUpperCase()}</Text>
             <Text style={styles.text2}>{selectedMeal.duration} Minutes</Text>
              </View>
           <View style={styles.innercontainer}>
            

            <Text style={{fontSize:15,fontWeight:'bold'}}> Ingredients</Text>
            </View>
          <List data={selectedMeal.ingredients}/>

            <View style={styles.innercontainer}>

            <Text style={{fontSize:15,fontWeight:'bold'}}>Steps</Text>
            </View>
            <List data={selectedMeal.steps}/>

           

        </ScrollView>
    )

};
const styles=StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    innercontainer:{
     
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:24,
        marginVertical:4,
        borderBottomColor:'black',
        borderBottomWidth:2
    },
    title:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    details:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        margin:16
    },
    text2:{
        fontSize:12,
        fontWeight:'normal',
        paddingHorizontal:4

    },
})







export default Details;