import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBkuC2a3BfjqUFrTXbBMDvv6ArM7AQpAkI',
  authDomain: 'react-with-redux-and-firebase.firebaseapp.com',
  databaseURL: 'https://react-with-redux-and-firebase.firebaseio.com',
  projectId: 'react-with-redux-and-firebase',
  storageBucket: 'react-with-redux-and-firebase.appspot.com',
  messagingSenderId: '914395001759',
  appId: '1:914395001759:web:c2c63268d00e2f475043aa'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
