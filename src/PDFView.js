import React from 'react';
import { View, StyleSheet
 } from 'react-native';
import { WebView } from 'react-native-webview';

export const PDFView = ({navigation, route}) => {
    return (
        <WebView
            bounces={true}
            scrollEnabled={true}
          source={{ uri: route.params.url }} />
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
  });
  