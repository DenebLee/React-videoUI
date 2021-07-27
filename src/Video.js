// //User Zoom SDK for video call 

// Usage
// In the component file where you want to use the Web SDK, import ZoomMtg and call the preLoadWasm() and prepareJssdk() functions.

// import { ZoomMtg } from '@zoomus/websdk';

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();
// NOTE: The following directory (already in node_modules) must be accessible in your url path:

// node_modules/@zoomus/websdk/dist/lib/
// Or, you can set a custom path to the Web SDK's lib directory using:

// ZoomMtg.setZoomJSLib('http://localhost:9999/custom/path/to/lib/', '/av')
// NOTE: The following files (already in node_modules) must be globally accessible (equivalent of link and script tag in index.html):

// node_modules/@zoomus/websdk/dist/css/bootstrap.css
// node_modules/@zoomus/websdk/dist/css/react-select.css
// Set the config variables (reference below):

// // setup your signautre endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
// var signatureEndpoint = 'http://localhost:4000'
// var apiKey = 'JWT_API_KEY'
// var meetingNumber = 123456789
// var role = 0
// var leaveUrl = 'http://localhost:9999'
// var userName = 'WebSDK'
// var userEmail = ''
// var passWord = ''