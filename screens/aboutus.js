import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

 function AboutScreen() {
  const navigation = useNavigation();

  const [fontsLoaded] = useFonts({
    CastoroTitlingRegular: require('../assets/fonts/CastoroTitling-Regular.ttf'),
    JuaRegular: require('../assets/fonts/Jua-Regular.ttf'),
    GalindoRegular: require('../assets/fonts/Galindo-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
        <SafeAreaView style={styles.container}>
          <View style={styles.membersContainer}>
            <Image 
                source={require('../assets/membersIcon.png')}
                style={styles.membersIcon}
            />
            <Image 
                source={require('../assets/membersIcon.png')}
                style={styles.membersIcon}
            />
            <Image 
                source={require('../assets/membersIcon.png')}
                style={styles.membersIcon}
            />
            <Image 
                source={require('../assets/membersIcon.png')}
                style={styles.membersIcon}
            />
            <Image 
                source={require('../assets/membersIcon.png')}
                style={[styles.membersIcon, styles.iconSecondRow]}
            />
            <Image 
                source={require('../assets/membersIcon.png')}
                style={[styles.membersIcon, styles.iconSecondRow]}
            />
          </View>

            <View style={styles.nameContainer}>
                <Text style={styles.memberName}>
                    TOMOBO,{"\n"}ANDREA D.
                </Text>

                <Text style={styles.memberName}>
                    DE DIOS,{"\n"}JAMES 
                </Text>

                <Text style={styles.memberName}>
                    ENGRACIA,{"\n"}JAHREM
                </Text>

                <Text style={styles.memberName}>
                    ACADEMIA,{"\n"}PAUL JAMES F.
                </Text>

                <Text style={styles.memberName}>
                    LAGONDAY,{"\n"}JOHN
                </Text>

                <Text style={styles.memberNameFive}>
                    MICHAEL M
                </Text>
            </View>


          <View style={styles.leaderContainer}>
            <Image
              source={require('../assets/leaderIcon.png')}
              style={styles.profileIcon}
              />
          </View>

          <Text style={[styles.leaderName]}>
            JONGKO, ARJAY M.
          </Text>

          <View style={styles.aboutContainer}>
            <Text style={styles.aboutText}>
                Creating a design in Figma involves setting up a new file, organizing frames (artboards) to define the boundaries of your design, and using tools like shapes, text, and images to build the user interface. You can add and customize text, colors, and styles, and create reusable components for consistency. For responsive design, Figma’s Auto Layout feature helps elements adapt to different screen sizes. You can also import icons, prototype interactions between frames, and preview the design in real-time. Collaboration is seamless, as multiple users can work on the same file simultaneously. Once the design is complete, you can export assets or use plugins like Unsplash and Iconify to enhance your workflow. Finally, you can share the project with a team or stakeholders for feedback or further development.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Dashboard')}>
                <Text style={styles.buttonText}>HOME</Text>
            </TouchableOpacity>
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7C0EF399',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    membersContainer: { 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 90,
    },
    membersIcon: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
        resizeMode: 'contain', 
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 12, 
    },
    memberName: {
        fontSize: 10,
        color: '#FFFFFF',
        marginHorizontal: 10,
        fontFamily: 'JuaRegular',
    },
    memberNameFive: {
        color: '#FFFFFF',
        fontSize: 10,
        marginRight: 20,
        fontFamily: 'JuaRegular',
    },
    leaderContainer: {
      alignSelf: 'center',
      marginTop: 48,
    },
    leaderName: {
      fontSize: 12,
      color: '#FFFFFF',
      textAlign: 'center',
      fontFamily: 'JuaRegular',
    },
    profileIcon: {
      width: 60,
      height: 60,
      marginTop: -30,
      resizeMode: 'contain', 
    },
    aboutContainer: {
      backgroundColor: '#D9D9D9',
      width: "80%",
      height: "45%",
      alignSelf: 'center',
      padding: 20,
      marginTop: 30,
      borderRadius: 20,
      borderWidth: 1,
      zIndex: 1,
    },
    aboutText: {
      fontFamily: 'JuaRegular',
      fontSize: 15,
      lineHeight: 20,
    },
    buttonContainer: {
      alignSelf: 'flex-end',
      marginTop: 90,
      marginRight: 50,  
    },
    homeButton: {
      fontSize: 15,
      backgroundColor: '#ED08004D',
      paddingVertical: 12,
      paddingHorizontal: 70,
      borderRadius: 10,
      borderColor: '#000000',
      paddingLeft: 20,
      zIndex: 1,
    },
    buttonText: {
      color: '#000000',
      fontSize: 15,
      fontFamily: 'GalindoRegular',
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


export default AboutScreen;