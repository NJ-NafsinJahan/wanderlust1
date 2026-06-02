import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white p-2 m-3">
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
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li>
            <Link href={"/login"}>LogIn</Link>
          </li>
          <li>
            <Link href={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
