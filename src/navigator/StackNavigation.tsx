import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import SplashScreen from '../screens/splash';
import Location from '../screens/location';
import Home from '../screens/home';
import Maps from '../screens/map';
import Hotel from '../screens/hotels';
import {useColorScheme} from 'react-native';
import SignUp from '../screens/signUp';
import Login from '../screens/login';
import ForgotPassword from '../screens/forgotPassword';
import SignUpVerify from '../screens/verifyOtp';

export type StackParamList = {
  SplashScreen: undefined;
  SignUp:undefined;
  Login:undefined;
  ForgotPassword:undefined;
  SignUpVerify:undefined;
  Home: undefined;
  ScrollableCalendarExample:undefined;
  Location:undefined;
  Maps:undefined;
  Hotel:undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigation = () => {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUpVerify" component={SignUpVerify} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Hotel" component={Hotel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
