import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
function ElearningScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    Texturina60ptRegular: require('../../assets/fonts/Texturina_60pt-Regular.ttf'),
    JuaRegular: require('../../assets/fonts/Jua-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
        <SafeAreaView style={styles.container}>
             <View style={styles.digitalContainer}>
                <Text style={styles.textContent}>
                    *E-learning Platforms*{"\n"}
                    E-learning platforms are online portals that provide a variety of educational resources and tools for both students and educators. These platforms offer self-paced, guided, or instructor-led courses in various subjects. {"\n"} {"\n"}
                    
                    *Popular E-learning Platforms:*{"\n"}
                    1. *Coursera*: Offers courses from universities and institutions worldwide, covering a wide range of subjects, from business to technology.{"\n"}
                    2. *Udemy*: A marketplace with a vast range of courses, including professional development, programming, design, and marketing.{"\n"}
                    3. *Khan Academy*: Provides free courses primarily focused on school subjects like math, science, and humanities.{"\n"}
                    4. *edX*: Like Coursera, edX offers high-quality courses from universities and is known for its in-depth academic programs.{"\n"}
                    5. *LinkedIn Learning*: Focuses on professional development, offering courses in business, creativity, and technology skills.{"\n"}
                    {"\n"}
                    *Key Features of E-learning Platforms:*{"\n"}
                    - *Flexibility*: Learn at your own pace and schedule.{"\n"}
                    - *Interactive Content*: Videos, quizzes, assignments, and discussion forums to enhance engagement.{"\n"}
                    - *Certificates*: Many platforms offer completion certificates or even degrees for certain courses.{"\n"}
                    - *Collaboration*: Some platforms support group work, peer assessments, and interaction with instructors.{"\n"}
                    {"\n"}
                    *Virtual Classroom*{"\n"}
                    A virtual classroom is a digital space where instructors and students interact in real-time, replicating the experience of a physical classroom. These classrooms often use video conferencing software combined with other digital tools to deliver lessons, discussions, and group activities.
                </Text>
            </View> 

            <View style={styles.eclipseContainer}>
              <Image
                    source={require('../../assets/eclipse/eclipse1.png')}
                    style={styles.eclipseOne}
                  />
              <Image
                    source={require('../../assets/eclipse/eclipse2.png')}
                    style={styles.eclipseTwo}
                  />
              <Image
                    source={require('../../assets/eclipse/eclipse3.png')}
                    style={styles.eclipseThree}
                  />
              <Image
                    source={require('../../assets/eclipse/eclipse4.png')}
                    style={styles.eclipseFour}
                  />
              <Image
                    source={require('../../assets/eclipse/eclipse5.png')}
                    style={styles.eclipseFive}
                  />
              <Image
                    source={require('../../assets/eclipse/eclipse6.png')}
                    style={styles.eclipseSix}
                  />
            </View>

            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7C0EF399',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    digitalContainer: {
      paddingHorizontal: 20,
      paddingVertical: 50,
    },
    textContent: {
      fontSize: 16,
      color: '#FFFFFF',
      lineHeight: 22,
      fontFamily: 'Texturina60ptRegular',
    },
    backButton: {
      alignSelf: 'flex-end', 
      marginHorizontal: 20, 
      marginTop: -10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
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
    }
});


export default ElearningScreen;