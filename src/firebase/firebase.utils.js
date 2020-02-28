import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDhfoZSZtEE764zvIhNAytuJpoHR1sNGyw",
    authDomain: "fuzzy-logic-app.firebaseapp.com",
    databaseURL: "https://fuzzy-logic-app.firebaseio.com",
    projectId: "fuzzy-logic-app",
    storageBucket: "fuzzy-logic-app.appspot.com",
    messagingSenderId: "101118253936",
    appId: "1:101118253936:web:7baa385f8e06d29af64db5",
    measurementId: "G-MKTNXH42X7"
  };

export const createUserProfile = async  (user, otherData) =>{
    if(!user)return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const snap = await userRef.get();
    if(!snap.exists){
        const {email,name} = user;
        const createdAt = new Date();
        console.log(user);
        try {
          userRef.set({
            name,
            email,
            createdAt,
          });
        }catch(e){
          console.log(e);
        } 
    }



    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider); 
export default firebase;


