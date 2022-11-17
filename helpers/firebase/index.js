import { initializeApp } from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'

const provider = new GoogleAuthProvider()
import { doc, getDoc, getFirestore, setDoc, updateDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBp71TLmAJr9lGzWou7V2CAnUF1VlzfEIk",
  authDomain: "viuscore.firebaseapp.com",
  projectId: "viuscore",
  storageBucket: "viuscore.appspot.com",
  messagingSenderId: "523512503671",
  appId: "1:523512503671:web:ba0af26d78b9d6b9595572",
  measurementId: "G-L8YJ4ZEG9C"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore(app)
export async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}
export async function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}
export async function signOut() {
  await auth.signOut()
}
export async function signInWithGoogle() {
  await signInWithRedirect(auth, provider)
}
export async function getUser(email) {
  const collectionRef = doc(db, 'users', email || auth.currentUser.email)
  const collectionSnap = await getDoc(collectionRef)
  return collectionSnap.data()
}
export async function updateUser(data, email) {
  const docRef = doc(db, 'users', email || auth.currentUser.email)
  await updateDoc(docRef, data)
}
export async function setUser(data, email) {
  const docRef = doc(db, 'users', email || auth.currentUser.email)
  await setDoc(docRef, data)
}
