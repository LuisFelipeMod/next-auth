import { getServerSession } from "next-auth";
import ButtonLogout from "../_components/ui/buttonLogout";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Dashboard() {
  const session = await getServerSession();
  const avatar = session?.user?.image;

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <>
      <section className="flex flex-col">
        {avatar ? (
          <Image width={50} height={50} alt="Avatar" src={avatar} />
        ) : (
          <></>
        )}
        <h1>Olá, {session?.user?.name} </h1>
        <ButtonLogout>Logout</ButtonLogout>
      </section>
    </>
  );
}
