import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBtOnhoV8sPdxoFrw5gpTb-cqkftkpRHpE",
    authDomain: "react-dbfz.firebaseapp.com",
    databaseURL: "https://react-dbfz.firebaseio.com",
    projectId: "react-dbfz",
    storageBucket: "react-dbfz.appspot.com",
    messagingSenderId: "178154035038",
    appId: "1:178154035038:web:a49a8dd7d9ed98443a61cf",
    measurementId: "G-1WTZ92X8LM"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const fighterzRef = (uid='') => databaseRef.child(`fighterz/${uid}`)
      // *** User API ***
//   personnage = uid => this.db.ref(`fighterz/${uid}`);
//   fighterz = () => this.db.ref('fighterz');