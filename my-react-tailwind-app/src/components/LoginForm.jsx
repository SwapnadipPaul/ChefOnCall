import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: call backend auth endpoint
    console.log("submit", { email, password });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-gray-700">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-gray-700">Password</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="••••••••"
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Sign In
      </button>

      <div className="text-sm text-center text-gray-500">
        Don't have an account?{" "}
        <a className="text-indigo-600">Sign up</a>
      </div>
    </form>
  );
}