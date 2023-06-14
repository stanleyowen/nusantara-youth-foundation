import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "./config";

const auth = getAuth(firebaseApp);

async function signOutHandler() {
  let result, error;

  await signOut(auth)
    .then(() => (result = true))
    .catch((e) => (error = e));

  return { result, error };
}

export { signOutHandler };
