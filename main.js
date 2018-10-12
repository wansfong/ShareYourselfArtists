import * as firebase from "firebase";
import VueFirebase from 'vue-firebase'

//Configuration for firebase project
const FBCONFIG = {
    apiKey: "xxx",
    authDomain: "xxx",
    databaseURL: "xxx",
    projectId: "xxx",
    storageBucket: "xxx",
    messagingSenderId: "xxx"
};
 
Vue.use(VueFirebase, {firebase: firebase, config: FBCONFIG});

//To create a firebase instance
this.$firebase

//To check the route, add meta and define the redirect
/*{
    path: '/',
    name: 'Hello',
    component: HelloWorld
},
{
    path: '/test',
    name: 'Test',
    component: test,
    meta: { requiresAuth: false }
},
{
    path: '/dashboard',
    name:
*/