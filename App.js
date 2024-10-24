import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from './screens/homepage';
import LoginScreen from './screens/loginpage';
import RegistrationScreen from './screens/registrationpage';
import DashboardScreen from './screens/dashboard';
import AboutScreen from './screens/aboutus';

import DigitalLiteracyScreen from './screens/course/DigitalLiteracyScreen';
import ElearningScreen from './screens/course/ElearningScreen';
import MultimediaScreen from './screens/course/MultimediaScreen';
import CloudComputingScreen from './screens/course/CloudComputingScreen';
import ResearchScreen from './screens/course/ResearchScreen';
import MobileLearningScreen from './screens/course/MobileLearningScreen';
import InteractiveSoftwareScreen from './screens/course/InteractiveSoftwareScreen';
import CybersecurityScreen from './screens/course/CybersecurityScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="About" component={AboutScreen} />

        <Stack.Screen name="Digital" component={DigitalLiteracyScreen} />
        <Stack.Screen name="Elearning" component={ElearningScreen} />
        <Stack.Screen name="MultiMedia" component={MultimediaScreen} />
        <Stack.Screen name="CloudComputing" component={CloudComputingScreen} />
        <Stack.Screen name="Research" component={ResearchScreen} />
        <Stack.Screen name="MobileLearning" component={MobileLearningScreen} />
        <Stack.Screen name="InteractiveSoftware" component={InteractiveSoftwareScreen} />
        <Stack.Screen name="Cybersecurity" component={CybersecurityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
