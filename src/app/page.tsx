"use client";
import HomePage from "./home/page";
import {NextUIProvider} from "@nextui-org/react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start">
      <NextUIProvider>
        <HomePage />
      </NextUIProvider>
    </main>
  )
}
