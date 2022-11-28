"use client";
import React from "react";
import Description from "./description";
import LoginForm from "./form";

const Login = () => {
  return (
    <section className="h-screen bg-gradient-to-b from-slate-300 via-slate-100">
      <div className="px-12 py-28 h-full">
        <div className="flex flex-wrap justify-center h-full">
          <LoginForm />
          <Description />
        </div>
      </div>
    </section>
  );
};

export default Login;
