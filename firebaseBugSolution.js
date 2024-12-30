// Check for network connectivity before initializing Firebase
if (navigator.onLine) {
  firebase.initializeApp(firebaseConfig);
} else {
  // Handle offline case, show message to the user or retry
  console.error('No network connection. Firebase initialization failed.');
}

// Handle initialization errors
firebase.initializeApp(firebaseConfig)
  .catch((error) => {
    // Proper error handling based on the error code
    switch (error.code) {
      case 'app/invalid-app-name':
        console.error('Invalid Firebase app name:', error);
        break;
      case 'app/duplicate-app':
        console.error('Duplicate Firebase app:', error);
        break;
      case 'app/no-app':
        console.error('No Firebase app found:', error);
        break;
      default:
        console.error('Firebase initialization error:', error);
    }
  });