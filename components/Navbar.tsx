"use client";
import Link from "next/link";
import { ModeToggle } from "./theme-toogle";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  useUser,
} from "@clerk/nextjs";

export const Navbar = () => {
  const { isSignedIn } = useUser();
  return (
    <nav className="bg-background border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 py-2 text-lg">
        <Link href="/" className="p-2 text-3xl font-medium">
          SaaS
        </Link>
        <div className="space-x-2">
          {isSignedIn ? (
            <>
              <Link href="/dashboard" className="p-2 font-medium">
                Product
              </Link>
              <Link href="/dashboard/profile" className="p-2 font-medium">
                Profile
              </Link>
            </>
          ) : (
            <></>
          )}
          <Link href="/pricing" className="p-2 font-medium">
            Pricing
          </Link>
        </div>
        <div className="space-x-4 flex items-center">
          <ModeToggle />
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SignOutButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};
