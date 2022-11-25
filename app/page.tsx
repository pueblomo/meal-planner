"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Button from "../components/button/button";
import Input from "../components/input/input";
import LoadingSpinner from "../components/spinner/loading-spinner";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <LoadingSpinner />
    </div>
  );
}
