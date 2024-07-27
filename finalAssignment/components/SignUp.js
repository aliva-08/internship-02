import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground, TouchableOpacity,Alert } from 'react-native';
import styles from '../styles/styles';

const SignUp = ({navigation}) => {
    //const [page, setPage] = useState('GettingStarted');
    //const [userDetails, setUserDetails] = useState({});
  //const [form, setForm] = useState({ username: '', password: '', confirmPassword: '', email: '' });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
   //const { username, password, confirmPassword, email } = form;
  const handleSignUpChange = () => {
    if (!username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!password || !confirmPassword) {
      Alert.alert('Error', 'Password and confirm password are required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if(!email){
      Alert.alert('Error','Email is required');
      return;
    }

     //setForm({ username: '', password: '', confirmPassword: '', email: '' });
     //SetPage('login');

    navigation.navigate('Login', {username});
  };

   

      return(
        
        <View style ={styles.container}>
        <ImageBackground source={{ uri: 'https://i.pinimg.com/474x/12/c2/1e/12c21ed270afd4467a7f6047698cd93a.jpg'}} style={styles.imageBackground}>
          <Text style={styles.title}>Sign Up</Text>
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={handleSignUpChange}>
            <Text style={styles.buttonText}>Register yourself!</Text>
          </TouchableOpacity>
          </ImageBackground>
         </View>
      );
      };
      export default SignUp;
