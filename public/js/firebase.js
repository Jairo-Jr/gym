var firebaseConfig = {
    apiKey: "AIzaSyCNB9uNAwi7K5iwo__BL0TrKprzNdc6utg",
    authDomain: "demogitlab-4e37e.firebaseapp.com",
    databaseURL: "https://demogitlab-4e37e.firebaseio.com",
    projectId: "demogitlab-4e37e",
    storageBucket: "demogitlab-4e37e.appspot.com",
    messagingSenderId: "905383646055",
    appId: "1:905383646055:web:6cee08bddbc221fe3795c2",
    measurementId: "G-3YTBQFS720"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export {firebase};