"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
const navbar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const setProviders = async () => {
      const res = await getProviders();
      setProviders(res);
      setProviders();
    };
  }, []);

  return (
    <>
      <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
          <Image
            src="/assets/images/logo.svg"
            alt="promptopia Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <p className="logo_text">Ai CHAT</p>
        </Link>
        </nav>
        </>
  );
};

export default navbar;