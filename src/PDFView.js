import React from 'react';
import { View, StyleSheet
 } from 'react-native';
import { WebView } from 'react-native-webview';

export const PDFView = ({navigation, route}) => {
    return (
        <WebView
            bounces={true}
            useWebKit={true}
            scrollEnabled={true}
          source={{ uri: 'http://docs.google.com/gview?embedded=true&url=http://www.africau.edu/images/default/sample.pdf' }} />
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });
  