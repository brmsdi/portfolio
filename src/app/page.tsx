"use client";
import {NextUIProvider} from "@nextui-org/react";
import HomePage from "@/app/pages/home/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <NextUIProvider>
        <HomePage />
      </NextUIProvider>
    </main>
  )
}
