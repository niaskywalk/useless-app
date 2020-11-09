export const addList = (listID, title, description) => {
  return window.firebase.database().ref("lists/" + listID).set({id: listID, title, description});
}

/// ADD to APP.JS before render

componentDidMount = () => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB6NaiaYKfOfMHfMxi_5nBjvddjRzjXiMg",
    authDomain: "todolistapp-murasaki.firebaseapp.com",
    databaseURL: "https://todolistapp-murasaki.firebaseio.com",
    projectId: "todolistapp-murasaki",
    storageBucket: "todolistapp-murasaki.appspot.com",
    messagingSenderId: "455803529738",
    appId: "1:455803529738:web:cfc56a177f6d104d1b8df3",
    measurementId: "G-1DG22PH75G"
  };
  // Initialize Firebase
  window.firebase.initializeApp(firebaseConfig);
  window.firebase.analytics();
}