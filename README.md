# Webview Demo #

This project is a demo about how to make webview aware about content type by including the
**Content-Type** header.

## Required Dependencies ##

All required dependencies are include in package.json. 

## Development setup ##

### Local Web Server ###

1. Open a Terminal window
2. Move to server folder: ```cd webviewdemo/server```
3. Map server port: ```adb reverse tcp:9090 tcp:9090```
4. Install server packages: ```npm install```
3. Start the demo server: ``` npm run start```

### Client ###

As this program was created for demo puroses, it only runs in emulator.
