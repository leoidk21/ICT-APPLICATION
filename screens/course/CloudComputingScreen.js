import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Platform, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');
function CloudComputingScreen() {
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
                        Cloud computing for education{"\n"}
                        has significantly transformed how learning is delivered, accessed, and managed. By providing scalable, cost-effective, and flexible resources, cloud computing allows educators and students to access educational content and services from anywhere, making education more accessible and efficient.{"\n"}
                        
                        ### Key Benefits of Cloud Computing in Education:{"\n"}
                        1. *Accessibility and Flexibility*:   - Students and educators can access educational materials, assignments, and resources from any device with an internet connection. This enables learning beyond the traditional classroom setting, supporting remote and hybrid learning models.   - Cloud platforms enable students to collaborate and share documents in real time, promoting group work and communication, regardless of physical location.{"\n"} {"\n"}
                        2. *Cost Efficiency*:   - Schools and universities save on the costs associated with hardware, software, and maintenance by using cloud-based services. Instead of investing in expensive IT infrastructure, institutions can rely on cloud service providers like Google Cloud, Microsoft Azure, or AWS.   - Many cloud platforms offer affordable or even free versions for educational institutions, making advanced technology accessible to schools with limited budgets.{"\n"} {"\n"}
                        3. *Collaboration and Communication*:   - Tools such as Google Workspace for Education (Google Docs, Google Drive, Google Meet) or Microsoft Teams enable seamless communication between students and teachers. These platforms also allow for file sharing, video conferencing, and real-time collaboration on assignments and projects.   - Cloud-based learning management systems (LMS) like Moodle and Canvas allow instructors to upload assignments, track student progress, and provide feedback in one centralized platform.{"\n"} {"\n"}
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

export default CloudComputingScreen;
