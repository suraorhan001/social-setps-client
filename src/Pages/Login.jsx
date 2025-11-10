import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router"; 
import { AuthContext } from "../Provider/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


const googleProvider= new GoogleAuthProvider()

const Login = () => {
  const {login} = use(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()
 const handleGoogleSignIn=()=>{
   signInWithPopup(auth,googleProvider)
   .then((res)=>{
    console.log(res)
     navigate(`${location.state?location.state : '/'}`)
   })
   .catch((err)=>{
          console.log(err)
   })
 }
  
  const handleLogIn=(e)=>{
     e.preventDefault()
  
   const email = e.target.email.value;
   const password = e.target.password.value;
   console.log(email,password)
   login(email,password)
   .then((res)=>{
    const user = res.user
    console.log(user)
  navigate(`${location.state?location.state : '/'}`)
   })
   .catch((err)=>{
    const errMsg = err.message
    alert(errMsg)
   })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email & Password */}
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              name="email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
              name="password"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        {/* Google Login */}
        <div className="mt-4 flex justify-center">
          <button  onClick={handleGoogleSignIn} className="flex items-center px-4 py-2 border rounded hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Login with Google
          </button>
        </div>

        {/* Links: Register & Forget Password */}
        <div className="mt-4 flex justify-between text-gray-600 text-sm">
          <Link to="/register" className="text-blue-600 hover:underline">
            Don't have an account? Register
          </Link>
          <Link to="/forgot-password" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;


