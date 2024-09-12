'use client'

import Link from "next/link";

const links = [
    {name: 'Page d\'accueil', href: '/'},
    {name: 'TODO', href: '/TODO'},
    {name: 'Tic Tac Toe', href: '/tic-tac-toe'}
];

export function Sidebar() {
    return (
        <div className="flex flex-col w-[90%] h-1/2 border-8 border-gray-800 rounded-2xl bg-lime-200 overflow:scroll m-2">
            <h1 className="text-6xl font-bold m-2">Naviguer</h1>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className='flex my-1 mx-3 rounded-2xl bg-sky-200 p-3 hover:bg-sky-400 overflow-hidden w-[90%] h-[10%]'
                        >
                        <p className="font-bold text-xl text-nowrap">{link.name}</p>
                    </Link>
                );
            })}
        </div>
    );
}