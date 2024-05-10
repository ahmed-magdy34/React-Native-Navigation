import { createContext, useState } from "react";
 
export const FavouritesContext=createContext({
    ids:[],
    addFavourites:(id)=>{},
    removeFavourites:(id)=>{},
});
const FavouritesContextProvider=({children})=>{
    const[favouriteMealId,setFavouriteMealId]=useState([])
    const addFavourites=(id)=>{
        setFavouriteMealId((currentIds)=>[...currentIds,id])
    };
    const removeFavourites=(id)=>{
        setFavouriteMealId((currentIds)=>
            currentIds.filter((mealId)=>mealId!==id)
        )
    }
    const value={
        ids:favouriteMealId,
        addFavourites:addFavourites,
        removeFavourites:removeFavourites
    }

    return(
        <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
    )

}
export default FavouritesContextProvider;