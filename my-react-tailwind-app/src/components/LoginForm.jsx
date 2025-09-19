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
    <div className="flex min-h-screen items-center justify-center bg-[#121827]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-[#1a202d] p-8 shadow-lg"
      >
        <h2 className="mb-6 text-center text-2xl font-bold text-white">
          Sign In
        </h2>
        <div className="space-y-6">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-600 bg-[#252a35] px-4 py-2 text-white placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              placeholder="you@example.com"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-gray-300">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full rounded-md border-gray-600 bg-[#252a35] px-4 py-2 text-white placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              placeholder="••••••••"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 py-2 px-4 font-semibold text-white transition hover:bg-purple-700"
          >
            Sign In
          </button>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          Don't have an account?{" "}
          <a
            href="#"
            className="font-medium text-purple-500 hover:text-purple-400"
          >
            Sign up
          </a>
        </div>
      </form>
    </div>
  );
}
