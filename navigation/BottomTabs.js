import React from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabs from './TopTabs';
import Comments from '../screens/Comments';

const Bottom = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainVideo" component={TopTabs} />
      <Stack.Screen 
        name="Comments" 
        component={Comments} 
        options={{ 
          presentation: 'transparentModal',
          cardStyle: { backgroundColor: 'transparent' }
        }} 
      />
    </Stack.Navigator>
  );
}

export default function BottomTabs() {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { 
          backgroundColor: 'black', 
          height: 60, 
          borderTopWidth: 0,
          paddingBottom: 5
        },
        headerShown: false
      }}
    >
      <Bottom.Screen name="Home" component={HomeStack} options={{
        tabBarIcon: ({focused}) => <Image source={require('../assets/img/Home.png')} style={{width: 25, height: 25, tintColor: focused ? 'white' : 'gray'}} />
      }} />
      <Bottom.Screen name="Discover" component={TopTabs} options={{
        tabBarIcon: ({focused}) => <Image source={require('../assets/img/Discover.png')} style={{width: 25, height: 25, tintColor: focused ? 'white' : 'gray'}} />
      }} />
      <Bottom.Screen name="Add" component={TopTabs} options={{
        tabBarIcon: () => <Image source={require('../assets/img/ButtonShape.png')} style={{width: 45, height: 30}} />,
        tabBarLabel: () => null
      }} />
      <Bottom.Screen name="Inbox" component={TopTabs} options={{
        tabBarIcon: ({focused}) => <Image source={require('../assets/img/Inbox.png')} style={{width: 25, height: 25, tintColor: focused ? 'white' : 'gray'}} />
      }} />
      <Bottom.Screen name="Me" component={TopTabs} options={{
        tabBarIcon: ({focused}) => <Image source={require('../assets/img/Me.png')} style={{width: 25, height: 25, tintColor: focused ? 'white' : 'gray'}} />
      }} />
    </Bottom.Navigator>
  );
}