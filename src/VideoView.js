import React from 'react';
import { WebView } from 'react-native-webview';
export const VideoView = ({navigation, route}) => {
    return (
        <WebView source={{uri: route.params.url }}></WebView>
    )
}