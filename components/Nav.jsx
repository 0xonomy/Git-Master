"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import bars from "/public/icons/bars.svg";
import "/styles/Nav.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <nav>
        <Link className="logo" href="/">
          Git Master
        </Link>
        <div className="menuIcon">
          <Image
            className="barsIcon"
            src={bars}
            alt="Bars Icon"
            width={40}
            height={40}
            onClick={() => {
              setToggleMenu((prev) => !prev);
            }}
          />
        </div>
      </nav>
      {toggleMenu && (
        <ul className="menu">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/search" className="link">
            Search
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
