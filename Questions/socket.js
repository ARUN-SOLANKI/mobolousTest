// step 1:-
// Make sure you have socket.io-client installed in your project:
// npm install socket.io-client

// step 2:-
// One common approach is to create a utility module to manage socket interactions:
// Create a new file named socket.js:

// import io from 'socket.io-client';
// const socket = io('http://your-server-url'); // Replace with your actual server URL
// export default socket;

// // step 3:-
// Then, you can import and use the socket instance in any component
// that requires WebSocket communication:

// import React, { useEffect } from 'react';
// import socket from './path-to-socket.js'; // Adjust the path as needed

// function SomeComponent() {
//   useEffect(() => {
//     socket.emit('joinRoom', { roomId: 'room123' });

//     socket.on('message', (message) => {
//       console.log('Received message:', message);
//     });

//     return () => {
//       socket.off('message');
//     };
//   }, []);

//   return (
//     // Component content
//   );
// }

// export default SomeComponent;

// In this example, the socket instance is imported from the socket.js
