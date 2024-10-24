import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
function MultimediaScreen() {
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
                        Multimedia in Education* refers to the use of various digital tools and content types—such as text, audio, video, images, and animations—within educational environments to enhance learning experiences. {"\n"}{"\n"}
                        
                        Key Components of Multimedia in Education:{"\n"}
                        1. Text: The foundation of most educational materials, text is used in e-books, presentations, and on-screen instructions. It is often combined with other media to provide clarity and context.{"\n"}{"\n"}
                        2. Audio: Used in podcasts, recorded lectures, or voiceovers in presentations, audio helps auditory learners understand concepts through listening. It also supports students with reading difficulties or visual impairments.{"\n"} {"\n"}
                        3. Video: Videos make complex concepts easier to understand by showing real-world applications, demonstrations, or simulations. Educational platforms like YouTube, Khan Academy, and TED Talks utilize video to teach various subjects.{"\n"} {"\n"}
                        4. Images: Diagrams, infographics, and photos help visualize abstract or difficult concepts, making them easier to grasp. These are especially useful in subjects like biology, geography, and history.{"\n"} {"\n"}
                        5. Animation: Animations are particularly effective for explaining processes or systems that involve movement or change over time (e.g., cell division, chemical reactions). Animated tutorials often simplify complex content.{"\n"} {"\n"}
                        6. Interactive Media: This includes simulations, quizzes, and games that allow students to engage directly with the learning material, fostering active learning. Tools like Kahoot, simulations in science apps, or virtual labs enable experiential learning.{"\n"} {"\n"}
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

export default MultimediaScreen;
