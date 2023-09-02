import accountInfo from "@/lib/dropbox";
import Image from "next/image";

export default async function Home() {
  await accountInfo();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
