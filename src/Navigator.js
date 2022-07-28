/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { VideoView } from './VideoView';
import { PDFView } from './PDFView';
const Stack = createNativeStackNavigator();

import { HomeView } from './HomeView';

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Video"
          component={VideoView}
          options={{ title: 'Video' }}
        />
        <Stack.Screen
          name="PDF"
          component={PDFView}
          options={{ title: 'Document' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
