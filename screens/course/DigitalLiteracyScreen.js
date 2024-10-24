import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
function DigitalLiteracyScreen() {
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
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.digitalContainer}>
                    <Text style={styles.textContent}>
                        Digital Literacy{"\n"}
                        Digital literacy refers to the ability to use digital tools, technologies, and platforms effectively. It involves more than just knowing how to operate a computer; it includes understanding how to navigate the internet, evaluate digital content, and communicate or collaborate online. {"\n"} {"\n"}
                        
                        Key areas of digital literacy:{"\n"}
                        1. *Basic Computer Skills*: Using operating systems (Windows, macOS), managing files, and understanding hardware.{"\n"}
                        2. *Online Communication*: Using email, social media, and other communication platforms (Zoom, Skype).{"\n"}
                        3. *Internet Safety*: Recognizing and avoiding malware, phishing scams, and understanding privacy settings.{"\n"}
                        4. *Data Handling*: Understanding how to manage, interpret, and present digital data (spreadsheets, databases).{"\n"}
                        5. *Content Creation**: Using tools for word processing, presentations (MS Word, Google Docs, PowerPoint), and basic graphic design.{"\n"}
                        {"\n"}
                        ICT Fundamentals{"\n"}
                        ICT refers to technologies used for communication, data processing, and information sharing. It includes hardware (computers, servers, mobile devices) and software (applications, databases) that enable digital communication.{"\n"}
                        {"\n"}
                        Core components of ICT fundamentals:{"\n"}
                        1. *Networking*: Understanding how the internet, intranets, and various networks function (LAN, WAN).{"\n"}
                        2. *Hardware & Software*: Familiarity with physical devices (computers, routers) and software (operating systems, apps).{"\n"}
                        3. *Databases and Information Systems*: Basic knowledge of managing data using databases and understanding information systems in organizations.{"\n"}
                        4. *Cloud Computing*: Using services like Google Drive, Dropbox, or AWS to store and access information over the internet.{"\n"}
                        5. *Cybersecurity**: Basic understanding of securing data, protecting devices, and ensuring privacy online.
                    </Text>
                </View>
              </ScrollView> 

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
      paddingVertical: 20,
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
      marginTop: -40,
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

export default DigitalLiteracyScreen;
