import React, { useState } from "react";
import LoginBackground from "../images/IFAloginbackgroundenh.jpg";

export default function Login() {
  const [form, setForm] = useState({ phone: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      localStorage.setItem("token", data.token);
      window.location.href = "/";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-20">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-2">Login to Your Account</h2>
          <p className="text-gray-400 mb-8">Your Own Digital Campaign</p>

          {/* Social Buttons */}
<div className="flex space-x-4 mb-6">
  {/* Google Login Button */}
  <button className="flex items-center justify-center w-1/2 border border-gray-300 rounded-lg py-2 hover:border-gray-500 transition">
    <img
      src="https://www.svgrepo.com/show/355037/google.svg"
      alt="Google"
      className="w-5 h-5 mr-2"
    />
    Login with Google
  </button>

  {/* Apple Login Button */}
<button className="inline-flex items-center justify-center w-1/2 border border-gray-300 rounded-lg py-2 hover:border-gray-500 transition">
  {/* Square Apple logo for better alignment */}
  <img
    src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
    alt="Apple Logo"
    className="w-6 h-6 mr-2"
  />
  Sign up with Apple
</button>

</div>


          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-700" />
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <hr className="flex-grow border-gray-700" />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4 bg-red-900/20 px-3 py-2 rounded">
              {error}
            </p>
          )}

          {/* Form Fields */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="tel"
              name="phone"
              placeholder="User Name"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-sm placeholder-gray-400 focus:outline-none focus:border-purple-500"
            />

            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox text-purple-500 bg-gray-800 border-gray-700" />
                <span>Remember Me</span>
              </label>
              <a href="/forgot" className="hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 font-medium rounded-lg bg-[linear-gradient(to_right,#AE2B07,grey,#354B4D)] hover:brightness-110 transition"

            >
              {loading ? "Logging in..." : "Login to Your Account"}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Not a member yet?{" "}
            <a href="/signup" className="text-orange-400 hover:underline">
              Register Now
            </a>
          </p>

          <div className="flex justify-between mt-12 text-xs text-gray-500">
            <a href="/privacy">Privacy Policy</a>
            <span>Copyright 2025</span>
          </div>
        </div>
      </div>

      {/* Right Side - Image / Mockup */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-800 via-gray-900 to-black items-center justify-center">
<img
  src={LoginBackground}
  alt="App Mockup"
  className="w-full h-screen object-cover drop-shadow-2xl"
/>

      </div>
    </div>
  );
}
