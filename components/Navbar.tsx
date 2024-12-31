"use client"

import Link from "next/link";
import { Github, Linkedin, ExternalLink, AlignJustify } from "lucide-react"
import { navigation } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  
  return (
    <header className="px-6 py-3 bg-white shadow-sm font-work-sans">
      <nav className="relative flex justify-between items-center">
        <AlignJustify onClick={() => setToggle(prev => !prev)} className="z-50 max-md:block hidden cursor-pointer" />
        
        <div className={`max-md:flex-col max-md:z-40 flex justify-between transition-all duration-[5000] max-md:text-center max-md:pt-20  max-md:h-screen max-md:w-4/5 max-md:bg-white max-md:top-0 max-md:inline-block max-md:absolute ${toggle ? 'max-md:-left-6' : 'max-md:-left-[90%]'}`}>
          <ul className="flex gap-4 max-md:flex-col max-md:space-y-8">
              {navigation.map(link => (
                <li onClick={() => setToggle(prev => !prev)} key={link.id}>
                  <Link href={link.href} className="nav-link">{link.name}</Link>
                </li>
              ))}
          </ul>
          <a href="/Loubnaresume.pdf" download="loubnaresume.pdf" className="hidden max-md:block flex gap-2 bg-black text-white px-4 py-2 rounded-lg max-md:block">
            <span>Resume</span> <ExternalLink />
          </a>
        </div>


        <Link
          href="/"
          className="border-4 border-black text-white bg-black px-0.5 rounded-lg py-1 "
        >
          <span className="">Loubna </span>
          <span className="bg-white text-black px-2.5 py-1.5 rounded-md">
            Dev
          </span>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://github.com/loubna213"><Github /></Link>
          <Link href="https://www.linkedin.com/in/loubna-lekouaghet-2a05b7232/"><Linkedin /></Link>
          <a href="/Loubnaresume.pdf"
            download="loubnaresume.pdf" className="flex gap-2 bg-black text-white px-4 py-2 rounded-lg max-md:hidden"><span>Resume</span> <ExternalLink />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
