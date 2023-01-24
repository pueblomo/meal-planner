"use client";

import {usePathname, useRouter} from "next/navigation";
import React, {type FC, type PropsWithChildren, useEffect, useState} from "react";
import {authenticationIsValid} from "../services/pocketbase";

const RouterGuard: FC<PropsWithChildren> = ({children}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck(pathname);
  }, [pathname]);

  function authCheck(url: string | null): void {
    const publicPaths = ["/login"];
    if (url == null || (!authenticationIsValid() && !publicPaths.includes(url))) {
      setAuthorized(false);
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }

  return <>{authorized && children}</>;
};

export default RouterGuard;
