
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Button
} from 'react-native';

;
export const HomeView = ({navigation}) => {

  return (

        <View>
          <Button title="Video" onPress={()=>navigation.navigate('Video', {url: 'http://localhost:9090/video?source=https://www.w3schools.com/html/mov_bbb.mp4'})} />
          <Button title="PDF" onPress={()=>navigation.navigate('PDF', {url: 'http://localhost:9090/document.pdf?source=https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'})} />
        </View>

  );
};


