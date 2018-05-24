import firebase from 'firebase/app'
import 'firebase/database'
import Rebase from 're-base'

    const config = {
      apiKey: "AIzaSyDcgK2CHn84zibSoZ__82HyMoxogZn3OjM",
      authDomain: "noteherder-fa0ae.firebaseapp.com",
      databaseURL: "https://noteherder-fa0ae.firebaseio.com",
      projectId: "noteherder-fa0ae",
      storageBucket: "",
      messagingSenderId: "62531616682"
    }
    const app = firebase.initializeApp(config)

    export default Rebase.createClass(app.database())
