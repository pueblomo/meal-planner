"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button/button";
import Input from "../components/input/input";
import LoadingSpinner from "../components/spinner/loading-spinner";
import authRoute from "./routerGuard";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Home = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default Home;
