import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import styles from '../styles/styles';


const Welcome = ({ navigation, route }) => {
  const { username } = route.params||{};
  return(

   <View style={styles.page}>
        <ImageBackground source ={{uri: 'https://png.pngtree.com/background/20211217/original/pngtree-rabbit-and-cake-blue-lovely-wallpaper-background-picture-image_1598674.jpg'}} style={styles.imageBackground}>
          <Text style={styles.text}>Welcome, {username}!</Text>
          <Text style={styles.welcomeText}>Welcome to the app!</Text>
          <Button title="Go to Product Page" onPress={() => navigation.navigate('Product',{username})} style={styles.buttonSpacing} />
          <View style={styles.buttonSpacing} />
          <Button title ="Section List" onPress={()=> navigation.navigate('SectionList')} style={styles.buttonSpacing}/>
          </ImageBackground>
        </View>
 );
};

export default Welcome;