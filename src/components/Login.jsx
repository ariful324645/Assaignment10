import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const userInfo = use(AuthContext);
  console.log(userInfo);

  return (
    <div>
      <div className="w-full max-w-md p-4 mx-auto mt-10 rounded-md shadow sm:p-8 bg-amber-100">
        <h2 className="mb-5 text-3xl font-semibold text-center ">
          Login to your account
        </h2>

        <form noValidate="" action="" className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-lg">
                  Password
                </label>
               
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign in
          </button>
          <p className="text-sm text-center dark:text-gray-600">
            Dont have account?
            <a
              href="/register"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              Sign up here
            </a>
          </p>
          <div className="flex items-center w-full my-2">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <div className="flex items-center justify-center">
            <button className="btn bg-white text-black w-full border-[#e5e5e5]">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
