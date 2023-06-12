import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import firebaseApp from "./config";

const auth = getAuth(firebaseApp);

async function signInWithEmailAndPasswordHandler(
  email: string,
  password: string
) {
  let result, error;

  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => (result = userCredential))
    .catch((e) => (error = e));

  return { result, error };
}

async function signInWithGoogleHandler() {
  let result, error;

  await signInWithPopup(auth, new GoogleAuthProvider())
    .then((userCredential) => (result = userCredential))
    .catch((e) => (error = e));

  return { result, error };
}

export { signInWithEmailAndPasswordHandler, signInWithGoogleHandler };
