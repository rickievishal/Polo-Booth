"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const HideLogin = ({ children }) => {
  const router = useRouter();
  const { user, isLoading } =  useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace("/home");
    }
  }, [user, isLoading, router]);

  // while checking auth → don't render anything
  if (isLoading) return null;

  // if user exists, block rendering login page
  if (user) return null;

  return children;
};

export default HideLogin;
