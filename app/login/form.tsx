import React from "react";
import { useForm, UseFormRegister } from "react-hook-form";
import Input from "../../components/input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="overflow-auto w-full h-2/4 bg-white rounded-t-lg shadow-lg xl:h-full xl:rounded-l-lg xl:rounded-tr-none xl:w-6/12">
      <div className="flex flex-col">
        <div className="mt-6 text-center">
          <img
            className="mx-auto w-48"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
          />
          <h4 className="pb-1 mt-1 mb-12 text-3xl font-semibold xl:text-xl">
            The meal planner
          </h4>
        </div>
        <div className="text-center">
          <form
            className="flex flex-col gap-2 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-2xl xl:text-base">
              Please login to your account
            </p>
            <div className="w-6/12">
              <Input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                register={register}
              />
              <p className="text-red-500">{errors.email?.message}</p>
              <Input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                register={register}
              />
              <p className="text-red-500">{errors.password?.message}</p>
            </div>
            <button
              type="submit"
              className="w-6/12 mt-3 text-2xl p-1 xl:text-base leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
            >
              Login
            </button>
            <button className="mt-5 text-gray-500">Forgot password?</button>
            <div className="flex justify-between items-center mt-10 w-6/12 text-2xl xl:text-base">
              <p>Don't have an account?</p>
              <button className="p-2 rounded-lg border-2 text-[#ee7724] border-[#b44593]">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
