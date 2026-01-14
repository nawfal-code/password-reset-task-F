import React, { useState} from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
 const navigate = useNavigate();


  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [confirmPassword,setConfirmPassword]=useState("");
 const [error,setError]=useState(null);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  
  // password confirmation check
  if(form.password.trim() !== confirmPassword.trim()){
    setError("Password and Confirm Password mismatch");
    return;
  }

  try {
    const response = await axios.post("https://password-reset-task-p9vk.onrender.com/api/users/create", form);
    toast.success(response.data.message);
    setError(null);  
    setForm({
    name: "",
    email: "",
    password: ""
    });
    setConfirmPassword("");

    navigate("/login");
  }
  catch(error){
    if(error.response){
      setError(error.response.data.message);
      toast.error(error.response.data.message);
    } else {
      setError("Something went wrong");
      toast.error("Something went wrong");
    }
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-900 to-gray-800 text-gray-200 p-8 rounded-2xl shadow-2xl">

        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create your account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
           {error&&<div className="text-red-700">{error}</div>}
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="example@mail.com"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
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
            <label className="block text-sm mb-1">Confirm Password</label>
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
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account? <Link to="/login" className="text-blue-300">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
