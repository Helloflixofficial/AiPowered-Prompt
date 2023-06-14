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
        {/* desktop NAVIGATION */}
        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flix gap-3 md:gap-5">
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>
              {/* Now starts the button of sign out */}
              <button type="button" className="outline_btn" onClick={signOut}>
                Sing Out
              </button>
              {/* profile pictur of the user */}
              <Link href="/profile">
                <img
                  src="/assets/images/logo.svg"
                  width={35}
                  height={35}
                  className="rounded-full"
                  alt="profile"
                  onClick={() => setDropdown((prev) => !prev)}
                />
                {dropdown && (
                  <div className="dropdown">
                    <Link
                      href="/profile"
                      className="dropdown_link"
                      onClick={() => setDropdown(false)}
                    ></Link>
                  </div>
                )}
              </Link>
            </div>
          ) : (
            // providers work is here
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sing in
                  </button>
                ))}
            </>
          )}
        </div>
        {/* mobile NAVIGATION bar  */}
        <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex">
              <img
                src="/assets/images/logo.svg"
                width={35}
                height={35}
                className="rounded-full"
                alt="profile"
                onClick={() => setDropdown((prev) => !prev)}
              />
              {dropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setDropdown(false)}
                  >
                    profile picture
                  </Link>
                </div>
              )}
            </div>
          ) : (
            // providers work is here
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Sing in
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default navbar;
