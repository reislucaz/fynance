"use client";

import * as React from "react";
import Link from "next/link";
import Logo from "./logo";
import { Menu } from "lucide-react";
import { ModeToggle } from "./toggle-mode";
import { Card } from "./ui/card";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Simulador", path: "/simulador" },
  ];

  return (
    <Card className="w-full bg-gray-100 dark:bg-zinc-950 shadow-lg  z-10">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Logo />
          </Link>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`w-full pb-3 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-primary">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        </div>
      </div>
    </Card>
  );
}
