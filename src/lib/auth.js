import { auth } from './firebase'

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
