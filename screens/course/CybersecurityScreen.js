import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
function CybersecurityScreen() {
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
                    Cybersecurity and digital ethics* focus on protecting information and promoting responsible behavior in the digital landscape.{"\n"}{"\n"}
                    ### Cybersecurity{"\n"}
                    
                    - *Definition*: Protects computer systems and data from theft, damage, and unauthorized access.{"\n"}
                    - *Key Aspects*:{"\n"}
                    - *Threat Identification*: Recognizing potential cyber threats like malware and phishing.{"\n"}
                    - *Risk Management*: Implementing measures to mitigate risks, such as firewalls and antivirus software.{"\n"}
                    - *Data Protection*: Ensuring data integrity and confidentiality through encryption and secure access controls.{"\n"}
                    - *Incident Response*: Planning for responding to cyber incidents and recovering data.{"\n"}
                    - *Security Awareness Training*: Educating users about cybersecurity best practices.{"\n"}
                    {"\n"}
                    ### Digital Ethics{"\n"}  
                    - *Definition*: Moral principles governing the use of digital technology.{"\n"}
                    - *Key Considerations*:{"\n"}
                    - *Privacy*: Respecting individuals' rights to personal data protection.{"\n"}
                    - *Data Ownership*: Addressing who owns user-generated data.{"\n"}
                    - *Digital Footprint*: Understanding the long-term impact of online actions.{"\n"}
                    - *Responsible Use*: Promoting ethical behavior in digital communication.{"\n"}
                    - *AI and Automation*: Evaluating ethical implications of AI and its effects on employment.{"\n"}
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

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>Back</Text>
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
      marginTop: 45,
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


export default CybersecurityScreen;