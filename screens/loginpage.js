import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function LoginScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    FenixRegular: require('../assets/fonts/Fenix-Regular.ttf'),
    JuaRegular: require('../assets/fonts/Jua-Regular.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              Innovative Learning{"\n"}with ICT Tools and Techniques
            </Text>
          </View>

          <View style={styles.formContainer}>
            <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="#E6E6E6"
                    autoCapitalize="none"
                    autoCompleteType="username"
                />
            <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#E6E6E6"
                    autoCapitalize="none"
                    autoCompleteType="username"
                />
          </View>

            <View style={styles.eclipseContainer}>
              <Image
                    source={require('../assets/eclipse/eclipse1.png')}
                    style={styles.eclipseOne}
                  />
              <Image
                    source={require('../assets/eclipse/eclipse2.png')}
                    style={styles.eclipseTwo}
                  />
              <Image
                    source={require('../assets/eclipse/eclipse3.png')}
                    style={styles.eclipseThree}
                  />
              <Image
                    source={require('../assets/eclipse/eclipse4.png')}
                    style={styles.eclipseFour}
                  />
              <Image
                    source={require('../assets/eclipse/eclipse5.png')}
                    style={styles.eclipseFive}
                  />
              <Image
                    source={require('../assets/eclipse/eclipse6.png')}
                    style={styles.eclipseSix}
                  />
            </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Dashboard')}>
                  <Text style={styles.buttonText}>Log in</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.registrationContainer}>
                <Text style={styles.registrationText}>
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                    <Text style={styles.registrationLink}>Sign in</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.phoneIcon}>
              <Image
                    source={require('../assets/phoneIcon.png')}
                    style={styles.phoneGuy}
                  />
              </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7C0EF399',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    firstIcon: {
      width: 200,
      height: 200,
      marginTop: 50,
      marginLeft: 10,
    },
    secondIcon: {
      width: 275,
      height: 322,
      position: 'absolute',
      marginTop: 180,
      marginLeft: 140,
    },
    thirdIcon: {
      width: 250,
      height: 265,
      marginLeft: 2,
      marginTop: 60,
    },
    fourthIcon: {
      width: 250,
      height: 260,
      marginTop: -100,
      marginLeft: 160,
    },
    loginButton: {
      backgroundColor: '#ED08004D',
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 50,
      marginTop: 32,
      alignSelf: 'center',
      borderColor: '#000000',
      borderWidth: 1,
    },
    buttonText: {
      textAlign: 'center', 
      color: '#E6E6E6',
      fontFamily: 'JuaRegular',
    },
    eclipseContainer: {
      position: 'absolute',
    },
    eclipseOne: {
      width: width * 0.3,
      height: height * 0.15,
      resizeMode: 'contain',
      marginLeft: width * 0.08,
      marginTop: height * -0.05,
    },
    eclipseTwo: {
      width: width * 0.3,
      height: height * 0.15,
      marginLeft: width * 0.78,
      marginTop: height * -0.07,
      resizeMode: 'contain',
    },
    eclipseThree: {
      width: width * 0.2,
      height: height * 0.12,
      marginLeft: width * 0.85,
      marginTop: height * 0.65,
      resizeMode: 'contain',
    },
    eclipseFour: {
      width: width * 0.2,
      height: height * 0.12,
      marginLeft: width * 0.85,
      marginTop: -height * 0.05,
      resizeMode: 'contain',
    },
    eclipseFive: {
      width: width * 0.22,
      height: height * 0.12,
      marginLeft: -width * 0.02,
      marginTop: -height * 0.220,
      resizeMode: 'contain',
    },
    eclipseSix: {
      width: width * 0.22,
      height: height * 0.12,
      marginLeft: -width * 0.02,
      marginTop: -height * 0.030,
      resizeMode: 'contain',
    },
    registrationContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
    },
    registrationText: {
      fontSize: 16,
      color: '#E6E6E6',
      marginRight: 5,
      fontFamily: 'CousineBold',
    },
    registrationLink: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#1B0087',
      textDecorationLine: 'underline',
      fontFamily: 'CousineBold',
    },
    headerText: {
      fontSize: 36,
      textAlign: 'center',
      color: '#FFFFFF',
      marginTop: 130,
      fontFamily: 'FenixRegular',
    },
    formContainer: {
      alignSelf: 'center',
      marginTop: 43,
    },  
    input: {
      fontSize: 15,
      backgroundColor: '#ED08004D',
      paddingVertical: 12,
      paddingHorizontal: 210,
      borderRadius: 50,
      marginTop: 30,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 20,
      fontFamily: 'JuaRegular',
    },
    phoneGuy: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
      marginTop: 65,
      marginLeft: -52,
    },
});


export default LoginScreen;