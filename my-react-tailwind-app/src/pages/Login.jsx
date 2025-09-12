import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Sign in to ChefOnCall
      </h1>
      <LoginForm />
    </div>
  );
}