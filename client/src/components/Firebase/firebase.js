import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCoOXYZOWMfrG2lfWDgOIvw4l0mE9855_A",
  authDomain: "buddyfinder-e5b18.firebaseapp.com",
  projectId: "buddyfinder-e5b18",
  storageBucket: "buddyfinder-e5b18.appspot.com",
  messagingSenderId: "357117456271",
  appId: "1:357117456271:web:0f1ffc5a25ab0530ffe5fa",
  measurementId: "G-C8GDMKFJTF"
};
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  doGetIdToken = (bool) => {
    return this.auth.currentUser.getIdToken(/* forceRefresh */ bool);
  }

  doGetUserByEmail = email => this.auth.getUserByEmail(email);

}

export default Firebase;