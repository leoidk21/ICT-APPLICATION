import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function HomeScreen() {
  const navigation = useNavigation();
  
  const [fontsLoaded] = useFonts({
    CousineBold: require('../assets/fonts/Cousine-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
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

      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/image/image1.png')}
          style={styles.firstIcon}
        />
        <Image
          source={require('../assets/image/image2.png')}
          style={styles.secondIcon}
        />
        <Image
          source={require('../assets/image/image3.png')}
          style={styles.thirdIcon}
        />
        <Image
          source={require('../assets/image/image4.png')}
          style={styles.fourthIcon}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
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
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  firstIcon: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginLeft: -10,
  },
  secondIcon: {
    width: 275,
    height: 322,
    marginTop: -180,
    marginLeft: 150,
  },
  thirdIcon: {
    width: 250,
    height: 265,
    marginLeft: -22,
    marginTop: -250,
  },
  fourthIcon: {
    width: 270,
    height: 290,
    marginTop: 90,
    marginLeft: 138,
  },
  startButton: {
    backgroundColor: '#ED08004D',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'CousineBold',
    fontSize: 18,
    color: '#000000',
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
});

export default HomeScreen;
