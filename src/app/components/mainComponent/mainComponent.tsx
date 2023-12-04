"use client";
import Header from "../header/header";
import { usePathname } from "next/navigation";

export default function MainComponent() {
  let refreshToken: string | null = "";
  if (typeof window !== "undefined") {
    refreshToken = localStorage.getItem("refresh_token");
  }

  const pathname = usePathname();
  return (
    <>
      {pathname !== "/login" && pathname !== "/logout" && (
        <>
          <Header />
        </>
      )}
    </>
  );
}
