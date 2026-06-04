"use client";
import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  console.log(user);

  // function for signOut
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="flex justify-between items-center bg-white p-2 m-3">
      {/* left div */}
      <div>
        <ul className="flex justify-between items-center gap-5">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/destinations"}>Destinations</Link>
          </li>
          <li>
            <Link href={"/my-bookings"}>My Bookings</Link>
          </li>
          <li>
            <Link href={"/add-destination"}>Add Destination</Link>
          </li>
        </ul>
      </div>

      {/* logo */}
      <div className="items-center">
        <Image
          src={"/assets/Wanderlast.png"}
          alt="logo"
          height={200}
          width={200}
        ></Image>
      </div>

      {/* right div */}
      <div>
        <ul className="flex justify-between items-center gap-5">
          {/* <li>
            <Link href={"/profile"}>Profile</Link>
          </li> */}

          {user ? (
            <>
              <li>
                <Avatar>
                  <Avatar.Image alt="John Doe" src={user?.image} />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <Button onClick={handleSignOut} variant="danger-soft">
                  LogOut
                </Button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>LogIn</Link>
              </li>
              <li>
                <Link href={"/signup"}>Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
