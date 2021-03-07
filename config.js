import firebase from 'firebase';
require('@firebase/firestore');
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBQXR0eRGMwrTIdcW4aeZLjHuFrUfMd7oI",
    authDomain: "procastupnew.firebaseapp.com",
    projectId: "procastupnew",
    storageBucket: "procastupnew.appspot.com",
    messagingSenderId: "623154716536",
    appId: "1:623154716536:web:5bcca27881053c8a42b28d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore();