import * as firebase from 'firebase'
let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyBlguAZPA8adFgpaTCQw5DWZZgoiuqmvoY",
    authDomain: "massayur-fe1b5.firebaseapp.com",
    databaseURL: "https://massayur-fe1b5.firebaseio.com",
    messagingSenderId: "651023586269"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}