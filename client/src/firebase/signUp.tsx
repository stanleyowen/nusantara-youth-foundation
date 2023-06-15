import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

async function signUpWithEmailAndPasswordHandler(
  email: string,
  password: string
) {
  let result, error;

  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => (result = userCredential))
    .catch((e) => (error = e));

  return { result, error };
}

export { signUpWithEmailAndPasswordHandler };
