import { FlatList, Text, View,StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGrid from "../Components/CategoryGrid";


const CategoriesScreen = ({navigation}) => {
  
  
const renderContainer = (item) => {
  const pressHandler=()=>{
    navigation.navigate('Recipes',{catId:item.id,name:item.title})

  }
  return <CategoryGrid title={item.title} color={'#F4F8E3'} onPress={pressHandler} id={item.id} />;
};
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => renderContainer(item)}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });