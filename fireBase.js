var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyDTq0CM1QDyWLnru_F5wd7k82f5ksmlu4M",
    authDomain: "paperbank-for-teachers.firebaseapp.com",
    projectId: "paperbank-for-teachers",
    storageBucket: "paperbank-for-teachers.appspot.com",
    messagingSenderId: "689229711752",
    appId: "1:689229711752:web:e73c49f803c96bc8de523d",
    measurementId: "G-04XZQHRGLS"
};
if (!hasInit) {
    firebase.initializeApp(config);
    hasInit = true;
}