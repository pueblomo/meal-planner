"use client";
import React, { FC } from "react";
import Description from "./description";
import LoginForm from "./form";

const Login: FC = () => {
  return (
    <section className="h-screen">
      <div className="px-3 py-4 h-full">
        <div className="flex flex-wrap justify-center h-full">
          <LoginForm />
          <Description />
        </div>
      </div>
    </section>
  );
};

export default Login;
