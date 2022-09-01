import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCFfziK0-xctQaSXg3MhSPkjqJ3qHjpDuI",
    authDomain: "legacy-of-books.firebaseapp.com",
    projectId: "legacy-of-books",
    storageBucket: "legacy-of-books.appspot.com",
    messagingSenderId: "402188829102",
    appId: "1:402188829102:web:4abbed4ddc97fe7d77883f",
    measurementId: "G-CVRKNZFC4C"
  };
  firebase.initializeApp(firebaseConfig)
  var db=firebase.storage()
  export{db}