/* import React from 'react';
import { View, Text, Button,ImageBackground, Image,ScrollView} from 'react-native';
import styles from '../styles/styles';
import { FavoritesContext } from './FavoritesContext';

const Data= [
    {
      id: '1',
        title: 'CheeseCkae',
      description: 'A classic creamy dessert with a graham cracker crust.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjydZjutjGggeqNOJaIbT27gxZNM4Cu4jR0g&s',
      price: '250',
     
    },
    {
      id: '2',
      title: 'Chocolate Lava Cake',
      description: 'Warm, gooey chocolate cake filled with molten chocolate.',
      image: 'https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg',
      price: '100',
    },
    {
      id: '3',
      title: 'Red velvet cakes',
      description: 'Italian dessert made with ladyfingers, mascarpone, and espresso.',
      image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2019/11/Tiramisu-Recipe-2-of-2.jpg',
      price: '120',
    },

    {
    
      id: '4',
      title: 'Black Forest Pastry',
      description: '',
      image: 'https://www.ruchiskitchen.com/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1-500x500.jpg',
      price: '100',
    },
    {
      id: '5',
      title: 'Blueberry Pastry',
      description: 'Warm, gooey chocolate cake filled with molten chocolate.',
      image: 'https://www.elloras.in/cdn/shop/products/Blueberry-Cheesecake_1.jpg?v=1659334029',
      price: '100',
    },
    {
      id: '6',
      title: 'Mango pastry',
      description: 'Italian dessert made with ladyfingers, mascarpone, and espresso.',
      image: 'https://www.shutterstock.com/image-photo/piece-mango-cake-isolated-white-260nw-1053048977.jpg',
      price: '120',
    },

  ];

    const ProductCard= ({ item , isFavorite, TouchableOpacity}) => {
       const { addFavorite } = useContext(FavoritesContext);
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={() => onToggleFavorite(product)}
    >
      <Text style={styles.buttonText} onPress={addFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </Text>
    </TouchableOpacity>
    </View>
    };

const ProductPage = ({ navigation,username, favorites, onToggleFavorite }) => {

 const gobackPage =()=> {
   navigation.navigate('Product');
 };
  return(
  <View style={styles.container}>
  <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/49/d8/9c/49d89ccbbfef5619936121f00c6b21ba.jpg'}} style={styles.imageBackground}>
    <Text style={styles.welcomeText}>Products</Text>
    <Text style={styles.title}>User: {username}</Text>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {Data.map((item) => (
        <ProductCard
          key={item.id}
          product={item}
          isFavorite={favorites.some(fav => fav.id === item.id)}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </ScrollView>
    <Button title="Go Back" color="#4CAF50" onPress={gobackPage} />
    </ImageBackground>
  </View>
);
};
export default ProductPage;*/


import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, ImageBackground, Button } from 'react-native';
import styles from '../styles/styles';
import { FavoritesContext } from './FavoritesContext';

const Data = [
  {
    id: '1',
    title: 'CheeseCkae',
    description: 'A classic creamy dessert with a graham cracker crust.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjydZjutjGggeqNOJaIbT27gxZNM4Cu4jR0g&s',
    price: '250',
  },
  {
    id: '2',
    title: 'Chocolate Lava Cake',
    description: 'Warm, gooey chocolate cake filled with molten chocolate.',
    image: 'https://preppykitchen.com/wp-content/uploads/2022/03/Chocolate-Lava-Cake-Recipe.jpg',
    price: '100',
  },
  {
    id: '3',
    title: 'Red velvet cakes',
    description: 'Italian dessert made with ladyfingers, mascarpone, and espresso.',
    image: 'https://www.julieseatsandtreats.com/wp-content/uploads/2019/11/Tiramisu-Recipe-2-of-2.jpg',
    price: '120',
  },
  {
    id: '4',
    title: 'Black Forest Pastry',
    description: '',
    image: 'https://www.ruchiskitchen.com/wp-content/uploads/2021/05/Eggless-Black-forest-Pastry-recipe-1-500x500.jpg',
    price: '100',
  },
  {
    id: '5',
    title: 'Blueberry Pastry',
    description: 'Warm, gooey chocolate cake filled with molten chocolate.',
    image: 'https://www.elloras.in/cdn/shop/products/Blueberry-Cheesecake_1.jpg?v=1659334029',
    price: '100',
  },
  {
    id: '6',
    title: 'Mango pastry',
    description: 'Italian dessert made with ladyfingers, mascarpone, and espresso.',
    image: 'https://www.shutterstock.com/image-photo/piece-mango-cake-isolated-white-260nw-1053048977.jpg',
    price: '120',
  },
];

const ProductCard = ({ item }) => {
  const { favorites, addFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some(favorite => favorite.id === item.id);

  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
      {!isFavorite && (
        <Button title="Add to Favorites" onPress={() => addFavorite(item.id)} />
      )}
    </View>
  );
};

const Product = ({ navigation, route }) => {
  const { username } = route.params || {};
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const previousPage = () => {
    navigation.navigate('Welcome');
  };

  return (
    <View style={styles.page}>
      <ImageBackground
        source={{ uri: 'https://img.freepik.com/free-vector/watercolor-chocolate-pattern-design_23-2149671650.jpg' }}
        style={styles.imageBackground}
      >
        <Text style={styles.text}>Products for {username}</Text>
        <FlatList
          data={Data}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={(item) => item.id}
        />
        <Button title="GoBack" onPress={previousPage} />
        <View style={styles.buttonSpacing} />
        <Button
          title="Go to Favorites"
          onPress={() => navigation.navigate('FavoriteScreen')}
          style={styles.buttonSpacing}
        />
      </ImageBackground>
    </View>
  );
};

export default Product;

