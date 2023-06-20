import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [switchMode, setSwitchMode] = useState<boolean>(false);
  return (
    <main className={twMerge("bg-black1 min-h-screen min-w-full", switchMode && "bg-white1", inter.className)}>
      <Navbar switchMode={switchMode} setSwitchMode={setSwitchMode} />
    </main>
  );
}
