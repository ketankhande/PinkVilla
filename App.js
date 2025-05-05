import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './contexts/AuthContext';
import { MatchProvider } from './contexts/MatchContext';
import { CommunityProvider } from './contexts/CommunityContext';
import theme from './theme';
import SplashScreen from './screens/SplashScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import MainTabNavigator from './navigators/MainTabNavigator';
import ProfileSetupScreen from './screens/ProfileSetupScreen';
import IdentitySelectionScreen from './screens/IdentitySelectionScreen';
import ChatScreen from './screens/ChatScreen';
import VideoCallScreen from './screens/VideoCallScreen';
import CommunityHubScreen from './screens/CommunityHubScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import MembershipScreen from './screens/MembershipScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <MatchProvider>
          <CommunityProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <StatusBar barStyle="dark-content" />
              <NavigationContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                  <Stack.Screen name="Splash" component={SplashScreen} />
                  <Stack.Screen name="Onboarding" component={OnboardingScreen} />
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Signup" component={SignupScreen} />
                  <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen} />
                  <Stack.Screen name="IdentitySelection" component={IdentitySelectionScreen} />
                  <Stack.Screen name="Main" component={MainTabNavigator} />
                  <Stack.Screen name="Chat" component={ChatScreen} />
                  <Stack.Screen name="VideoCall" component={VideoCallScreen} />
                  <Stack.Screen name="CommunityHub" component={CommunityHubScreen} />
                  <Stack.Screen name="EventDetail" component={EventDetailScreen} />
                  <Stack.Screen name="Membership" component={MembershipScreen} />
                  <Stack.Screen name="Settings" component={SettingsScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </SafeAreaView>
          </CommunityProvider>
        </MatchProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;