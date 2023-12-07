import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { StateProvider } from "@/context/stateContext";
import { initialState, reducer } from "@/context/stateReducer";
import MainComponent from "./components/mainComponent/mainComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PFM Clone",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateProvider initialState={initialState} reducer={reducer}>
          {/* <MainComponent /> */}
          {children}
        </StateProvider>
      </body>
    </html>
  );
}
