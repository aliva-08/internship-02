import React, { useContext } from 'react';
import { View, Text, Button, FlatList,ImageBackground } from 'react-native';
import { FavoritesContext } from './FavoritesContext';
import styles from '../styles/styles';
const FavoritesScreen = ({navigation, ProductCard}) => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
 
 const backPage =()=> {
   navigation.navigate('Product');
 }
  return (
    <View styles={styles.container}>
    <ImageBackground source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/375/664/original/seamless-pattern-cartoon-cute-dessert-character-cute-food-wallpaper-for-textile-gift-wrap-paper-vector.jpg'}} style={styles.imageBackground}>
      <FlatList
        data={favorites}
        //keyExtractor={(item) =>item.id.toString()}
         keyExtractor={(item, index) => item+index}
        renderItem={ProductCard}
        />
      <Button title="Remove from Favorites" onPress={() => removeFavorite(item.id)} />
      <View style={styles.buttonSpacing} />
      <Button title="GoBack" onPress={backPage} />
      </ImageBackground>
    </View>
  );
};

export default FavoritesScreen;