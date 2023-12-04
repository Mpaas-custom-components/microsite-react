"use client";
import { useStateProvider } from "@/context/stateContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { reducerCases } from "@/context/constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface CoreLayoutProps {
  children: React.ReactNode;
}

export default function CoreLayout({ children }: CoreLayoutProps) {
  const [queryClient] = React.useState(() => new QueryClient());
  const [loading, setLoading] = useState<boolean | null>(false);
  const router = useRouter();

  const [{}, dispatch] = useStateProvider();

  useEffect(() => {});

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
