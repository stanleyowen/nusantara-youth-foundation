import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth();

async function resetPasswordHandler(email: string) {
  let result, error;

  await sendPasswordResetEmail(auth, email)
    .then(() => (result = true))
    .catch((e) => (error = e));

  return { result, error };
}

export { resetPasswordHandler };
