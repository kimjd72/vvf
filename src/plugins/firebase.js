import Vue from 'vue'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'

import firebaseConfig from '../../firebaseConfig'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// test firebase
// firebase.firestore().collection('test').add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
