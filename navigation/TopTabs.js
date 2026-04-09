import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Following from '../screens/Following';
import ForYou from '../screens/ForYou';

const Top = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Top.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#aaa',
        tabBarLabelStyle: { fontWeight: 'bold', fontSize: 17, textTransform: 'none' },
        tabBarStyle: { 
          position: 'absolute', top: 40, left: 0, right: 0, 
          backgroundColor: 'transparent', elevation: 0 
        },
        tabBarItemStyle: { width: 'auto', paddingHorizontal: 12 },
        tabBarContentContainerStyle: { justifyContent: 'center' },
       
        tabBarIndicatorStyle: { height: 0, backgroundColor: 'transparent' }, 
      }}
    >
      <Top.Screen name="Following" component={Following} />
      <Top.Screen name="For You" component={ForYou} />
    </Top.Navigator>
  );
}