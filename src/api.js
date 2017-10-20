import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
// import { currentUser } from 'lib/auth'

import config from 'config/firebase'

firebase.initializeApp(config)
firebase.firestore().enablePersistence()

export const firestore = firebase.firestore()
export const auth = firebase.auth()

export const getAllExercises = async (uid) => {
  const collection = 'users/' + uid + '/exercises'
  const data = await firestore.collection(collection).get()
  let exercises = []
  data.forEach((e) => {
    const d = e.data()
    exercises.push({
      id: e.id,
      name: d.name,
      repeatsMax: d.repeatsMax,
      repeatsSetMax: d.repeatsSetMax,
      repeatsSetMin: d.repeatsSetMin,
    })
  })
  return exercises
}

export const saveWorkout = async (uid, workout) => {
  const collection = 'users/' + uid + '/log'
  await firestore.collection(collection).add(workout)
}

export function signUp (email, pw) {
  return auth.createUserWithEmailAndPassword(email, pw)
}

export function logout () {
  return auth.signOut()
}

export function login (email, pw) {
  return auth.signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return auth.sendPasswordResetEmail(email)
}

export function currentUser() {
  return auth.currentUser
}
