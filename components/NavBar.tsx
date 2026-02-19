'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Events', href: '/events' },
        { name: 'Communities', href: '/communities' },
    ];

    return (
        <header className="glass sticky top-0 z-50 border-b border-white/5 bg-[#030708]/80 backdrop-blur-xl">
            <nav className="flex flex-row justify-between items-center mx-auto container sm:px-10 px-5 py-4">
                <Link href="/" className="logo flex items-center gap-2 group">
                    <motion.div
                        whileHover={{ rotate: 15, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="relative w-8 h-8"
                    >
                        <Image src="/icons/logo.png" alt="logo" width={32} height={32} />
                    </motion.div>
                    <p className="text-xl font-bold italic bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                        DevEvent
                    </p>
                </Link>
                <ul className="flex flex-row items-center gap-8 list-none m-0 p-0">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <motion.li key={link.name} whileHover={{ y: -2 }}>
                                <Link
                                    href={link.href}
                                    className={`relative transition-colors font-semibold tracking-wide ${isActive ? 'text-primary' : 'text-light-200 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            </motion.li>
                        );
                    })}
                    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Link
                            href="/create"
                            className="bg-primary hover:bg-primary/90 text-black px-6 py-2.5 rounded-xl font-bold transition-all shadow-xl shadow-primary/20"
                        >
                            Host Event
                        </Link>
                    </motion.li>
                </ul>
            </nav>
        </header>
    );
};

export default NavBar;


