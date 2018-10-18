import { initializeApp } from 'firebase';

const app = initializeApp({
	apiKey: "AIzaSyCE1hmzBBvRowkDkYWmx99YqQ3gLb5Ur7I",
    authDomain: "share-yourself-artists-183.firebaseapp.com",
    databaseURL: "https://share-yourself-artists-183.firebaseio.com",
    projectId: "share-yourself-artists-183",
    storageBucket: "share-yourself-artists-183.appspot.com",
    messagingSenderId: "325063782093"
});

export const db = app.database();
export const namesRef = db.ref('names');
