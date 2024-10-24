import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

function DashboardScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    CastoroTitlingRegular: require('../assets/fonts/CastoroTitling-Regular.ttf'),
    JuaRegular: require('../assets/fonts/Jua-Regular.ttf'),
    InriaSerifBold: require('../assets/fonts/InriaSerif-Bold.ttf'),
  });


  if (!fontsLoaded) {
    return null;
  }

  const handleCoursePress = (screen) => {
    navigation.navigate(screen);
  };

  const courses = [
    { name: "Digital Literacy and ICT Fundamentals", screen: "Digital" },
    { name: "E-Learning Platforms and Virtual Classrooms", screen: "Elearning" },
    { name: "Multimedia in Education", screen: "MultiMedia" },
    { name: "Cloud Computing for Education", screen: "CloudComputing" },
    { name: "ICT for Research and Data Analysis", screen: "Research" },
    { name: "Mobile Learning Technologies", screen: "MobileLearning" },
    { name: "Interactive Learning Software", screen: "InteractiveSoftware" },
    { name: "Cybersecurity and Digital Ethics", screen: "Cybersecurity" }
  ];

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.userContainer}>
            <Image
              source={require('../assets/jongko.png')}
              style={styles.profileIcon}
              />
          </View>
          
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}>Welcome</Text>
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
              Course Offer
            </Text>
          </View>

          <View style={styles.courseContainer}>
            {courses.map((course, index) => (
              <TouchableOpacity style={styles.courseItem} 
                key={index}
                onPress={() => handleCoursePress(course.screen)}
              >
                <View style={styles.squareBox} />
                <Text style={styles.courseOffer} >{course.name}</Text>
              </TouchableOpacity>
            ))}
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

          <View style={styles.aboutContainer}>
            <TouchableOpacity style={styles.aboutButton} onPress={() => navigation.navigate('About')}>
              <Text style={styles.buttonText}>About Us</Text>
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
    userContainer: {
      alignSelf: 'center',
      marginTop: 72,
    },
    profileIcon: {
      width: 135,
      height: 135,
      resizeMode: 'contain', 
    },
    welcomeContainer: {
      alignSelf: 'center',
      marginTop: 38,
    },
    welcomeText: {
      color: '#FFFFFF',
      fontSize: 20,
      letterSpacing: 10,
      fontFamily: 'CastoroTitlingRegular',
    },
    headerText: {
      fontSize: 20,
      textAlign: 'left',
      color: '#FFFFFF',
      marginTop: 48,
      marginLeft: 40,
      fontFamily: 'InriaSerifBold',
    },
    courseContainer: {
      alignSelf: 'center',
      border: '1px',
      borderColor: '#000000',
      borderWidth: 1,
      borderRadius: 20,
      paddingTop: 40,
      marginTop: 20,
      paddingBottom: 70,
      paddingLeft: 24,
      width: "85%",
    },
    courseItem: {
      flexDirection: 'row',
      alignItems: 'center', 
      marginBottom: 22,
    },
    squareBox: {
      width: 10,
      height: 10, 
      backgroundColor: '#000',
      marginRight: 10,
    },
    courseOffer: {
      fontSize: 16, 
      color: '#E6E6E6', 
      textDecorationLine: 'underline',
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
    aboutContainer: {
      fontSize: 15,
      color: '#2416E9',
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 15,
      marginLeft: 330,
      marginTop: -40,
      fontFamily: 'JuaRegular',
      textDecorationLine: 'underline',
    },
});


export default DashboardScreen;