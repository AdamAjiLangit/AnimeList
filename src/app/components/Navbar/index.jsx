"use client";

import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import InputSearch from "./inputSearch";
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import '../../globals.css';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <Link href="/" className="font-bold text-white text-xl pl-5 anime">Anime<span className="text-black">List</span></Link>
            <ReactWhatsapp number="+62-888-0326-5650" message="Hello World!!!" className="flex items-center font-bold text-white wa">
                <FaWhatsapp className="mr-2" /> Chat
            </ReactWhatsapp>
            <InputSearch />
        </header>
    );
}

export default Navbar;