"use client";

import { Button } from "@/app/_components/ui/button";
import Card, { CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { signIn } from "next-auth/react";

export function Login() {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
          <h1 className="text-3xl px-4">Login</h1>
          <CardContent>
            <Button
              className="mt-2"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            >
              Login com o Google
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}

export default Login;
