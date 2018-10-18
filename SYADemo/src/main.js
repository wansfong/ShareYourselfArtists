import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'share-yourself-artists-183',
  databaseURL: 'https://share-yourself-artists-183.firebaseio.com'
})
export const db = firebase.firestore()

new Vue({
  el: '#app',
  render: h => h(App)
})
