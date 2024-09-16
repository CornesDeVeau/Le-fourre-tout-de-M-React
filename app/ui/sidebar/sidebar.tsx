"use client";

import clsx from "clsx";
import Link from "next/link";
import {
  HomeIcon,
  ClipboardDocumentCheckIcon,
  XCircleIcon,
  PhotoIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const links = [
  { name: "Page d'accueil", icon: HomeIcon, href: "/" },
  { name: "Depuis quand ?", icon: ClockIcon, href: "/since-when" },
  { name: "TODO", icon: ClipboardDocumentCheckIcon, href: "/TODO" },
  { name: "Tic Tac Toe", icon: XCircleIcon, href: "/tic-tac-toe" },
  { name: "Caroussel", icon: PhotoIcon, href: "/image-caroussel" },
];

export function Sidebar({
  isOpen,
  toggleCollapse,
}: {
  isOpen: boolean;
  toggleCollapse: (collapse: boolean) => void;
}) {
  console.log(isOpen);
  return (
    <div
      className={clsx(
        "flex flex-col justify-between bg-lime-200 border-r-8 border-b-8 border-gray-800 rounded-2xl",
        "md:w-full md:z-0 top-0 z-20 md:h-[80vh] h-full max-md:fixed -translate-x-1 -translate-y-1",
        { "w-[300px]": !isOpen },
        { "max-md:h-12 max-md:w-10": isOpen }
      )}
    >
      <nav className="md:sticky top-0 text-left">
        <button
          className="text-2xl text-nowrap font-bold m-1 md:m-4 max-md bg-lime-200"
          onClick={() => toggleCollapse(!isOpen)}
        >
          {isOpen ? "|||" : "Cachez-moi"}
        </button>
        <ul
          className={clsx("py-2 flex flex-col gap-2 text-right", {
            "max-md:hidden": isOpen,
          })}
        >
          {links.map((link) => {
            return (
              <li
                key={link.name}
                className="flex m-1 rounded-2xl bg-sky-200 hover:bg-sky-400 overflow-hidden w-[90%] h-[15%]"
              >
                <Link href={link.href} className="w-full">
                  <p className="font-bold text-xl text-nowrap pr-3">
                    {isOpen ? (
                      <link.icon className="w-6 h-6 -translate-x-[-15px]" />
                    ) : (
                      link.name
                    )}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
