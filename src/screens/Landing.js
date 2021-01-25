import React from 'react';
import {View, StyleSheet, Text, StatusBar} from 'react-native';
import {Image, Button} from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';
// import {LinearConfig} from '../../LinearConfig';
import {useNavigation} from '@react-navigation/native';
import absen from '../asset/absen.png';

const LandingScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#CAF0F8' barStyle="dark-content" />
          <View style={styles.slide}>
            <Image source={absen} style={styles.slide1Image} />
          </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Log In"
            containerStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    );
  };
  
  export default LandingScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#CAF0F8',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    button: {
      marginBottom: 13,
      marginHorizontal: 16,
      borderRadius: 3,
      width: 120,
    },
    buttonTitle: {
      fontFamily: 'Montserrat',
      fontWeight: 'bold',
      fontSize: 18,
      marginVertical: 5,
      textAlign: 'center',
    },
    termText: {
      fontFamily: 'Montserrat',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 8,
      color: '#07689F',
      marginHorizontal: 16,
    },
    bodyText: {
      fontFamily: 'Montserrat',
      fontSize: 18,
      marginBottom: 16,
      textAlign: 'center',
      color: '#07689F',
      marginHorizontal: 16,
    },
    slide: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide1Image: {
      width: 220,
      height: 220,
      marginTop: 50,
      marginBottom:150
    },
  });
  