import { initializeApp } from 'firebase';

const app = initializeApp({
	//add api key, domain, databaseURL etc.. via firebase acct
});

export const db = app.database();
export const namesRef = db.ref('names');
