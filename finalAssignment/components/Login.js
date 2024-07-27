import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground,Alert } from 'react-native';
import styles from '../styles/styles';

 const Login = ({navigation, route}) => {
   const { username: initialUsername } = route.params || {};
   const [username, setUsername] = useState(initialUsername||'');
  const [password, setPassword] = useState('');
  const handleLoginChange = () => {
    if (!username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password is required');
      return;
    }

   
    navigation.navigate('Welcome',{username})
  };

  return(
        <View style={styles.container}>
          <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/49/d8/9c/49d89ccbbfef5619936121f00c6b21ba.jpg'}} style={styles.imageBackground}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
           </ImageBackground>
          <Button title="Login" onPress={handleLoginChange} />
         
        </View>
    
  );
 };
 
 export default Login;

