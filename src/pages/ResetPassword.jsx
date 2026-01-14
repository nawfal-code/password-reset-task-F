import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {toast} from 'react-toastify';
const ResetPassword = () => {

const { token } = useParams();
const navigate = useNavigate();


  const [form, setForm] = useState({
    password: "",
  });
const [confirmPassword,setConfirmPassword]=useState("");
const [error,setError]=useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     try {
      if(form.password!==confirmPassword){
        return setError("password fields mismatch");
      }
      const response=await axios.put(`https://password-reset-task-p9vk.onrender.com/api/users/password-reset/${token}`,form);
      toast.success(response.data.message);
      setError(null);  
    setForm({
          password: ""
      });
      setConfirmPassword("");
      
      navigate("/login");
      
     } 
     catch (error) {
      if(error.response){
            setError(error.response.data.message);
            toast.error(error.response.data.message);
          } else {
            console.log(error);
            setError("Something went wrong");
            toast.error("Something went wrong");
          }
     }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Reset Password
        </h2>

        <p className="text-center text-sm text-gray-300 mb-4">
          Enter your new password and confirm it below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
         {error&&<div className="text-red-700">{error}</div>}
          {/* New Password */}
          <div>
            <label className="block text-sm mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1">Confirm New Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full mt-2 py-2 rounded-lg font-semibold bg-blue-500 hover:bg-blue-600 transition"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
