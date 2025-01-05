import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import SplashScreen from '../screens/splash';
import ScrollableCalendarExample from '../screens/calendars';
import Location from '../screens/location';
import Home from '../screens/home';
import Maps from '../screens/map';
import Hotel from '../screens/hotels';
import {useColorScheme} from 'react-native';

export type StackParamList = {
  SplashScreen: undefined;
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
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ScrollableCalendarExample" component={ScrollableCalendarExample} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Hotel" component={Hotel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigation;
