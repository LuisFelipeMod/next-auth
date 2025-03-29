"use client";

import { ReactNode } from "react";
import { Button } from "./button";
import { signOut } from "next-auth/react";

type ButtonLogoutProps = {
  children?: ReactNode;
};

export default function ButtonLogout({ children }: ButtonLogoutProps) {
  return <Button onClick={() => signOut()}>{children}</Button>;
}
