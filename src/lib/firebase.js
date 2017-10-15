import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

import config from '../config/firebase'

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()
