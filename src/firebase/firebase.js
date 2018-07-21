import * as firebase from 'firebase';
import config from './config';

let database, googleAuthProvider;

try {
  firebase.initializeApp(config);
  database = firebase.database();
  googleAuthProvider = new firebase.auth.GoogleAuthProvider();
} catch (e) {
  console.error(e);
}

export {database, firebase, googleAuthProvider};
