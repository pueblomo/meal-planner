import React, { FC, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import { ClientResponseError } from "pocketbase";
import {
  authenticationIsValid,
  createUser,
  login,
} from "../../services/pocketbase";

interface Inputs {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  })
  .required();

const LoginForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();
  const [loginError, setLoginError] = useState<string | undefined>(undefined);
  const [loginType, setLoginType] = useState(true);

  const onSubmit = (data: { email: string; password: string }): void => {
    setLoginError(undefined);

    if (loginType) {
      login(data.email, data.password)
        .then(() => {
          if (authenticationIsValid()) {
            router.push("/recipes");
          } else {
            setLoginError("authentication invalid");
          }
        })
        .catch((e) => {
          if (e instanceof ClientResponseError) {
            setLoginError(e.message);
          }
        });
    } else {
      createUser(data.email, data.password)
        .then(() => {
          login(data.email, data.password)
            .then(() => {
              if (authenticationIsValid()) {
                router.push("/recipes");
              } else {
                setLoginError("authentication invalid");
              }
            })
            .catch((e) => {
              if (e instanceof ClientResponseError) {
                setLoginError(e.message);
              }
            });
        })
        .catch((e) => {
          if (e instanceof ClientResponseError) {
            setLoginError(e.message);
          }
        });
    }
  };

  return (
    <div className="overflow-auto w-full h-2/4 bg-white rounded-t-lg shadow-lg xl:h-full xl:rounded-l-lg xl:rounded-tr-none xl:w-6/12 pb-2">
      <div className="flex flex-col">
        <div className="mt-2 text-center">
          <img
            className="mx-auto w-48"
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
            alt="logo"
          />
          <h4 className="pb-1 mt-1 mb-6 text-2xl font-semibold xl:text-xl">
            The meal planner
          </h4>
        </div>
        <div className="text-center">
          <form
            className="flex flex-col gap-3 items-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-xl xl:text-base">
              {loginType && "Please login to your account"}
              {!loginType && "Please register your account"}
            </p>
            <div>
              <Input
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                register={register}
                dataCy="input-email"
              />
              <p className="text-lg text-red-500 xl:text-base">
                {errors.email?.message}
              </p>
              <Input
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                register={register}
                dataCy="input-password"
              />
              <p className="text-lg text-red-500 xl:text-base">
                {errors.password?.message}
              </p>
            </div>
            <button
              type="submit"
              className="w-6/12 mt-3 text-xl p-1 xl:text-base leading-tight text-white rounded-lg border bg-gradient-to-r from-[#ee7724] via-[#d8363a] via-[#dd3675] to-[#b44593] uppercase"
              data-cy="button-submit"
            >
              {loginType && "Login"}
              {!loginType && "Register"}
            </button>
            <p className="text-lg text-red-500 xl:text-base">{loginError}</p>
            <button className="mt-5 text-lg text-gray-500 xl:text-base">
              Forgot password?
            </button>
            <div className="flex justify-around mt-10 w-full text-lg xl:text-base">
              {loginType && (
                <p className="self-center">Don&apos;t have an account?</p>
              )}
              {!loginType && <p className="self-center">Have an account?</p>}
              <button
                className="p-2 rounded-lg xl:text-base border-2 text-[#ee7724] border-[#b44593] text-xl"
                onClick={() => setLoginType(!loginType)}
                data-cy="button-change-form"
              >
                {loginType && "Register"}
                {!loginType && "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
