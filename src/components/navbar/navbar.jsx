'use client'
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("#me");

    const items = [
        { title: 'Me', href: '#me' },
        { title: 'What I Know', href: '#wath-i-know' },
        { title: 'Project', href: '#project' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + window.innerHeight / 2;
            items.forEach(item => {
                const section = document.querySelector(item.href);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
                        setActiveSection(item.href);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [items]);

    const handleClick = (href) => {
        const section = document.querySelector(href);
        if (section) {
            const sectionTop = section.offsetTop;
            const offset = window.innerHeight / 2 - section.offsetHeight / 2;
            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="fixed hidden lg:block right-12 top-1/2 -translate-y-1/2 z-50 ">
            <div className="flex flex-col gap-6">
                {items.map((item, index) => (
                    <Link key={index} href={item.href} onClick={(e) => {e.preventDefault();handleClick(item.href);}} className={`font-medium w-full  duration-700 ${activeSection === item.href ? 'text-[#fe3c01] p-2 rounded odd:bg-white even:bg-black' : 'text-white pr-10'} uppercase`}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}
