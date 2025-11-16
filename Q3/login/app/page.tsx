"use client";
import { useState } from "react";
import Link from "next/link";
import NavBar from "./components/NavBar";

export default function LoginPage() {
  // --- Valid Email List---
  const VALID_USERS: Record<string, string> = {
    "test@example.com": "Test@1234",
    "osman@example.com": "Pass@123",
    "abcde@email.com": "Abcde@12345"
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  // --- Password Requirements ---
  const [requirements, setRequirements] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false
  });
  const [message, setMessage] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);


  // --- Login ---
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!VALID_USERS[email]) {
      setMessage("⚠️ This email does not exist.");
      return;
    }

    if (VALID_USERS[email] !== password) {
      setMessage("⚠️ Incorrect password.");
      return;
    }

    setMessage("✔ Logged in successfully!");
    setLoggedIn(true);
    setPassword("");
    setFocused(false);
  };

  const validatePasswordParts = (value: string) => {
    return {
      length: value.length >= 8 && value.length <= 16,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /\d/.test(value),
      symbol: /[\W_]/.test(value),
    };
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setRequirements(validatePasswordParts(value));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setMessage(null);
    setRequirements({
      length: false,
      uppercase: false,
      lowercase: false,
      number: false,
      symbol: false
    });
  };

  return (
    <div className="flex flex-col items-center mt-30 md:mt-40 relative">
      <header className="w-full">
        <NavBar />
      </header>
      {!loggedIn ? (
        <>     
          {/* Login form */}
          <h1 className="text-2xl mb-4 text-gray-600">Login</h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-4 w-60 sm:w-72">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                handlePasswordChange(e.target.value)
              }}
              onFocus={() => setFocused(true)}
              className="p-2 border rounded"
              required
            />
            {focused && (
              <ul className="text-sm mt-2">
                <li className={requirements.uppercase ? "text-green-500" : "text-red-500"}>
                  {requirements.uppercase ? "✔" : "✘"} One uppercase letter
                </li>

                <li className={requirements.lowercase ? "text-green-500" : "text-red-500"}>
                  {requirements.lowercase ? "✔" : "✘"} One lowercase letter
                </li>

                <li className={requirements.number ? "text-green-500" : "text-red-500"}>
                  {requirements.number ? "✔" : "✘"} One number
                </li>

                <li className={requirements.symbol ? "text-green-500" : "text-red-500"}>
                  {requirements.symbol ? "✔" : "✘"} One symbol
                </li>

                <li className={requirements.length ? "text-green-500" : "text-red-500"}>
                  {requirements.length ? "✔" : "✘"} Between 8 and 16 characters
                </li>
              </ul>
            )}
            <button
              type="submit"
              disabled={!Object.values(requirements).every(Boolean)}
              className="bg-blue-500 text-white cursor-pointer p-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>
            <Link href="/auth/reset" className="text-gray-600 hover:underline">Forgot your password?</Link>
          </form>
          {message && <p className="mt-6 text-center text-sm">{message}</p>}
        </> 
      ) : (
        // --- Welcome Screen After Login ---
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold text-gray-600">
            Welcome, {email}!
          </h2>
          {/* Logout Button*/}
          <button
            onClick={handleLogout}
            className="mt-10 bg-red-400 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
