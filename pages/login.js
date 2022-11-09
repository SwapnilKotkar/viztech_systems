import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { MdAlternateEmail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Logging in...");

    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const data = await res.json();

    if (res.status === 200) {
      toast.remove();
      toast.success("Login Success!");

      localStorage.setItem("profile", JSON.stringify(data));

      setTimeout(() => {
        router.push("/admin");
      }, 500);
    } else {
      toast.remove();
      toast.error("login failed");
    }

    setLogin({
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    if (localStorage.getItem("profile")) {
      router.push("/");
    }
  }, []);

  return (
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-[#010851] sm:text-3xl">
          Welcome Back!
        </h1>

        <form
          method="POST"
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          onSubmit={handleSubmit}
        >
          <p className="text-lg text-[#010851] font-bold text-center">
            Sign in to your account
          </p>

          <div>
            <label
              htmlFor="email"
              className="text-sm text-[#010851] font-semibold"
            >
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 bg-gray-200 rounded-lg shadow-sm"
                placeholder="Enter email"
                value={login.email}
                onChange={handleChange}
              />
              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <div className="w-4 h-4 text-gray-500">
                  <MdAlternateEmail />
                </div>
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm text-[#010851] font-semibold"
            >
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 bg-gray-200 rounded-lg shadow-sm"
                placeholder="Enter password"
                autoComplete="off"
                value={login.password}
                onChange={handleChange}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer">
                <div
                  className="w-4 h-4 text-gray-500"
                  onClick={() => setShowPass((showPass) => !showPass)}
                >
                  {!showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm text-white font-semibold bg-[#010851] rounded-lg"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
