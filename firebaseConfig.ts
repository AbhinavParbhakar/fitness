import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import Config from 'react-native-config'

const firebaseConfig = {
  apiKey: Config.apiKey,
  authDomain: Config.authDomain,
  projectId: Config.projectId,
  storageBucket: Config.storageBucket,
  messagingSenderId: Config.messagingSenderId,
  appId: Config.appId
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}