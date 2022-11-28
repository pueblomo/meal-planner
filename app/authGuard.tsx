"use client";

import { useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { authenticationIsValid } from "../services/pocketbase";

const RouterGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(pathname);
  }, []);

  function authCheck(url: string | null) {
    const publicPaths = ["/login"];
    if (!url || (!authenticationIsValid() && !publicPaths.includes(url))) {
      setAuthorized(false);
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }

  return <>{authorized && children}</>;
};

export default RouterGuard;
