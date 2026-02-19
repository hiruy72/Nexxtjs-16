'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/5 bg-black/20 backdrop-blur-xl">
      <div className="mx-auto container px-5 py-12 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 transition-transform group-hover:scale-110 duration-300">
                <Image src="/icons/logo.png" alt="logo" fill className="object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                DevEvent
              </span>
            </Link>
            <p className="text-light-200 max-w-sm leading-relaxed">
              The ultimate hub for developers to discover world-class hackathons, meetups, and conferences. Stay ahead in the tech world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Explore</h4>
            <ul className="space-y-4 list-none p-0">
              <li>
                <Link href="/" className="text-light-200 hover:text-primary transition-colors duration-200">
                  All Events
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light-200 hover:text-primary transition-colors duration-200">
                  Communities
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light-200 hover:text-primary transition-colors duration-200">
                  Host an Event
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <ul className="space-y-4 list-none p-0">
              <li>
                <Link href="/" className="text-light-200 hover:text-primary transition-colors duration-200">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light-200 hover:text-primary transition-colors duration-200">
                  Discord
                </Link>
              </li>
              <li>
                <Link href="/" className="text-light-200 hover:text-primary transition-colors duration-200">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-light-200 text-sm">
            © {new Date().getFullYear()} DevEvent. Built for the community.
          </p>
          <div className="flex gap-8">
            <Link href="/" className="text-light-200 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-light-200 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
