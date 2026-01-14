import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const[error,setError]=useState(null);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      toast.info("it will take some time, wait for few minutes");
   const response= await axios.post("https://password-reset-task-p9vk.onrender.com/api/users/forgot-password",{email});
     toast.success(response.data.message);
          setError(null); 
          setEmail('');    
    } 
    catch (error) {
  if (error.response) {
    const { message, resetLink } = error.response.data;
    setError(message);

    if (resetLink) {
      toast.info(`Nodemailer not working. Here is your reset link: ${resetLink}`);
    } else {
      toast.error(message);
    }
  } else {
    toast.error("Something went wrong. Please try again.");
  }
}

    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Forgot Password
        </h2>

        <p className="text-center text-sm text-gray-300 mb-4">
          Enter your registered email and we will send you a reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
           {error&&<div className="text-red-700">${error}</div>}
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
