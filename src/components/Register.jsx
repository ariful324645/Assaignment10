import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
  // const [errorMessage, setErrorMessage] = useState("");
  const { googleLogin } = use(AuthContext);
  const { createUser, updateUser, setUser,user } = use(AuthContext);
  const navigate=useNavigate()

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.gmail.value;

    const photo = e.target.photo.value;
    const password = e.target.password.value;
    console.log(name, email, photo, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      if (password.length < 6) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Password must be 6 character",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else if (!/[A-Z]/.test(password)) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Must have an Uppercase letter in the password ",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else if (!/[a-z]/.test(password)) {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Must have an Lowercase letter in the password ",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      } else {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        return;
      }

      // return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUser({displayName:name,photoURL:photo}).then(()=>{
setUser({ ...user, displayName: name, photoURL: photo });
        }).catch(error=>{
          console.log(error)
        })
        navigate('/')
      
      })
      .catch((error) => {
        console.log(error);
        setUser(error)
      });
  };
  const GoogleRegister = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "success",
          title: " Error firebase",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div>
      <div className="w-full max-w-md mt-10 p-4 mx-auto rounded-md shadow sm:p-8 bg-amber-100">
        <h2 className="mb-5 text-3xl font-semibold text-center ">
          Register to your account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="email"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-lg">Email</label>
              <input
                type="email"
                name="gmail"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-lg">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                id="email"
                placeholder="Photo"
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
          {/* <div>
            {errorMessage && (
              <p className="text-red-700 font-semibold">{errorMessage}</p>
            )}
          </div> */}
          <button
            type="submit"
            className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"
          >
            Sign Up
          </button>
          <p className="text-sm text-center dark:text-gray-600">
            Dont have account?
            <a
              href="/login"
              rel="noopener noreferrer"
              className="focus:underline hover:underline"
            >
              Login here
            </a>
          </p>
          <div className="flex items-center w-full my-2">
            <hr className="w-full dark:text-gray-600" />
            <p className="px-3 dark:text-gray-600">OR</p>
            <hr className="w-full dark:text-gray-600" />
          </div>
          <div className="flex items-center justify-center">
            <Link to="/">
              <button
                onClick={GoogleRegister}
                className="btn bg-white text-black w-full border-[#e5e5e5]"
              >
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
            </Link>
          </div>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Register;
