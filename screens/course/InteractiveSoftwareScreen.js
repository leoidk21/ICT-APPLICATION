import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
function InteractiveScreen() {
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
                        *Interactive learning software* engages students through features like quizzes, simulations, and real-time feedback. It enhances learning by making it fun, personalized, and hands-on. Examples include *Kahoot!* for quizzes, *Nearpod* for interactive lessons, and *Labster* for virtual science labs.{"\n"}{"\n"}
                        Benefits include increased student engagement, immediate feedback, personalized learning, and collaboration. However, challenges include the need for access to technology and proper teacher training. Future trends involve AI for personalization, and the use of AR and VR for immersive learning experiences.{"\n"}
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
      paddingVertical: 50,
    },
    textContent: {
      fontSize: 18,
      color: '#FFFFFF',
      lineHeight: 22,
      fontFamily: 'Texturina60ptRegular',
    },
    backButton: {
      alignSelf: 'flex-end', 
      marginHorizontal: 20, 
      marginTop: -45,
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

export default InteractiveScreen;
