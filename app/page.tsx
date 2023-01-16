"use client";
import LoadingSpinner from "../components/loading-spinner";
import React, { FC, useEffect } from "react";
import { authenticationIsValid } from "../services/pocketbase";
import { useRouter } from "next/navigation";

const Home: FC = () => {
  const router = useRouter();

  useEffect(() => {
    if (authenticationIsValid()) {
      router.push("/recipes");
    } else {
      router.push("/login");
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default Home;
