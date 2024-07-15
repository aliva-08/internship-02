import React, { useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Button, FlatList, Image, ImageBackground } from 'react-native';
import styles from './styles';

const App = () => {
  const [page, setPage] = useState('gettingStarted');
  const [userDetails, setUserDetails] = useState({});
  const [form, setForm] = useState({ username: '', password: '', confirmPassword: '', email: '' });
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });

  const handleSignUpChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleLoginChange = (name, value) => {
    setLoginForm({ ...loginForm, [name]: value });
  };

  const signUp = () => {
    const { username, password, confirmPassword, email } = form;

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

    setUserDetails({ username, password, email });
    setForm({ username: '', password: '', confirmPassword: '', email: '' });
    setPage('login');
  };

  const login = () => {
    const { username, password } = loginForm;

    if (!username) {
      Alert.alert('Error', 'Username is required');
      return;
    }
    if (!password) {
      Alert.alert('Error', 'Password is required');
      return;
    }

    if (username === userDetails.username && password === userDetails.password) {
      setPage('welcome');
      Alert.alert('Logged in successfully!');
    } else {
      Alert.alert('Invalid username or password');
    }
  };

  const logout = () => {
    setPage('gettingStarted');
    setLoginForm({ username: '', password: '' });
  };

  const products = [
    {
      id: '1',
      title: 'CheeseCkae',
      description: 'A classic creamy dessert with a graham cracker crust.',
      image: 'img2.png',
      price: '250',
    },
    {
      id: '2',
      title: 'Chocolate Lava Cake',
      description: 'Warm, gooey chocolate cake filled with molten chocolate.',
      image: 'img3.png',
      price: '100',
    },
    {
      id: '3',
      title: 'Tiramisu',
      description: 'Italian dessert made with ladyfingers, mascarpone, and espresso.',
      image: 'img4.png',
      price: '120',
    }
  ];
  
  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={styles.cardPrice}>{item.price}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      {page === 'gettingStarted' && (
        <View style={styles.page}>
            <Text style={styles.title}>DREAMY DESERTS</Text>
          <Button title="Get Started" onPress={() => setPage('signUp')} />
        </View>
      )}

      {page === 'signUp' && (
        <View style={styles.page}>
          <Text style={styles.title}>Sign Up</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={form.username}
            onChangeText={(value) => handleSignUpChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={form.password}
            onChangeText={(value) => handleSignUpChange('password', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            value={form.confirmPassword}
            onChangeText={(value) => handleSignUpChange('confirmPassword', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.email}
            onChangeText={(value) => handleSignUpChange('email', value)}
          />
          <TouchableOpacity style={[styles.button, { backgroundColor: 'green' }]} onPress={signUp}>
            <Text style={styles.buttonText}>Register yourself!</Text>
          </TouchableOpacity>
        </View>
      )}

      {page === 'login' && (
        <View style={styles.page}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={loginForm.username}
            onChangeText={(value) => handleLoginChange('username', value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={loginForm.password}
            onChangeText={(value) => handleLoginChange('password', value)}
          />
          <Button title="Login" onPress={login} />
        </View>
      )}

      {page === 'welcome' && (
        <View style={styles.page}>
          <Text style={styles.title}>Welcome, {userDetails.username}!</Text>
          <Text style={styles.welcomeText}>Welcome to the app!</Text>
          <Button title="Go to Product Page" onPress={() => setPage('product')} style={styles.buttonSpacing} />
          <View style={styles.buttonSpacing} />
          <Button title="Logout" onPress={logout} style={styles.buttonSpacing} />
        </View>
      )}

      {page === 'product' && (
        <View style={styles.page}>
          <Text style={styles.title}>Products for {userDetails.username}</Text>
          <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
          />
          <Button title="Logout" onPress={logout} />
        </View>
      )}
    </View>
  );
};

export default App;