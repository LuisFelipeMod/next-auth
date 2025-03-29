import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Input } from "@/app/_components/ui/input";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faça seu cadastro",
  description: "Faça seu cadastro aqui",
};

export default function Register() {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-sm">
          <h1 className="text-3xl px-4">Cadastre-se</h1>
          <CardContent>
            <Input name="name" placeholder="Nome *" className="" required />
            <Input type="email" name="email" placeholder="Email *" required />
            <Input name="cpf" placeholder="CPF *" required />
            <Input name="phonenumber" placeholder="Celular *" required />
            <Input
              type="password"
              name="password"
              placeholder="Senha *"
              required
            />
            <Input
              type="password"
              name="confirm-password"
              placeholder="Confirmar senha *"
              required
            />

            <Button className="mt-2">Cadastrar</Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
