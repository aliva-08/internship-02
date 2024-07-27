import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground,Alert, SectionList, Switch } from 'react-native';
import styles from '../styles/styles';
const sections = [
    { title: 'cakes', data: ['cheesse cake', 'chocolate lava cake', 'red velvet cake'] },
  //{ title: 'mousse', data: ['Chocolate mouse', 'Vanilla mousse', 'Choco Vanilla mousse'] },
  { title: 'pastries', data: ['Black Forest', 'Blueberry', 'Mango satry'] },
];

 
 
const Lists = ({navigation}) =>  {

  const [isEnabled, setIsEnabled] = useState(false);
 const [backgroundColor, setBackgroundColor] = useState('Dark Cyan');
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    setBackgroundColor(previousBg => previousBg == 'Dark Cyan'?'white':'white');
  };

   const logout = () => {
    navigation.navigate('GettingStarted');
    //setLoginForm({ username: '', password: '' });
  };
  return  (
<View style={styles.container}>
        <ImageBackground source={{ uri: 'https://marketplace.canva.com/EAGH3pOFp94/1/0/900w/canva-pink-illustration-watercolor-cake-background-instagram-story-4_MlxQPH-oo.jpg'}} style={styles.imageBackground}>
          <Text style={styles.text}>Listed Items </Text>
           <SectionList
            sections={sections}
             keyExtractor={(item, index) => item+index}
             renderItem={({ item }) => (
               <View style ={styles.item}>
             <Text style={styles.item}>{item}</Text>
             </View>)}

               renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
              //renderSectionHeader={({ section: title }) => <Text style={styles.header}>{section.title}</Text>}
              //keyExtractor={(item, index) => item+index}
          />

           <View style={[styles.switch, {backgroundColor}]}>

         <Switch
         trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
        </View>
       
       <Button title="Logout" onPress={logout} />
        </ImageBackground>
       </View>
      );
      };

      export default Lists;