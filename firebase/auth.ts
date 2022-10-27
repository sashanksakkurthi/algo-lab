import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = signInWithEmailAndPassword(auth, email, password);
  return response;
};
