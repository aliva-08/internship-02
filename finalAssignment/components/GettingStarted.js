 import React from 'react';
import { View, Text, Button,ImageBackground } from 'react-native';
import styles from '../styles/styles';
 
 const GettingStarted = ({ navigation }) => {
  return (
       <View style={styles.container}>
        <ImageBackground source={{ uri: 'https://i.pinimg.com/736x/0a/49/37/0a493772297c74e47d69da7dc6d1fb32.jpg'}} style={styles.imageBackground}>
            <Text style={styles.title}>DREAMY DESERTS</Text>
          <Button title="Get Started" onPress={() => navigation.navigate('SignUp')} />
          </ImageBackground>
        </View>
      );
      };
export default GettingStarted;
