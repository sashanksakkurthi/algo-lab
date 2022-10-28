import { Login } from "../firebase/auth";
import { useRouter } from "next/router";
import React from "react";

const LoginForm = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [InvalidError, setInvalidError] = React.useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    setInvalidError(false);
    Login({ email, password })
      .then(() => router.push("/"))
      .catch(() => {
        setInvalidError(true);
      });
  };

  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-800">
            Login in to your Account
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="space-y-4 rounded-md shadow-sm">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 font-inter font-medium text-gray-800 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-3 font-inter font-medium text-gray-800 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {InvalidError ? (
            <div className="text-center font-inter text-sm font-normal text-red-600">
              Incorrect Password or Email
            </div>
          ) : null}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="text-md group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 font-inter font-medium text-white hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
