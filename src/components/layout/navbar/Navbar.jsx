"use client"

import './Navbar.css';
import { Calendar } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Logo = '/assets/Logo.png';

export default function Navbar({ user, onLogout }) {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
            <Link href="/" className="Logo-navbar">
                <img src={Logo} className="Image" alt="Logo" />
                <div className="title-navbar">
                    <h2>One Step</h2>
                    <h3>Solution Bali</h3>
                </div>
            </Link>

            <ul className="Nav1">
                <li>
                    <Link href="/" className={pathname === '/' ? 'nav-link active' : 'nav-link'}>Beranda</Link>
                </li>
                <li>
                    <Link href="/event" className={pathname === '/event' ? 'nav-link active' : 'nav-link'}>Event</Link>
                </li>
                <li>
                    <Link href="/mitra" className={pathname === '/mitra' ? 'nav-link active' : 'nav-link'}>Mitra</Link>
                </li>
                <li>
                    <Link href="/kampus" className={pathname === '/kampus' ? 'nav-link active' : 'nav-link'}>Kampus</Link>
                </li>
                <li>
                    <Link href="/berita" className={pathname === '/berita' ? 'nav-link active' : 'nav-link'}>Berita</Link>
                </li>
                <li>
                    <Link href="/tentang-kami" className={pathname === '/tentang-kami' ? 'nav-link active' : 'nav-link'}>Tentang Kami</Link>
                </li>
                <li>
                    <Link href="/karier" className={pathname === '/karier' ? 'nav-link active' : 'nav-link'}>Karier</Link>
                </li>
            </ul>

            <div className="Nav2" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link href="/konsultasi" className="a_start" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} className="calendar-icon" />
                    <h4>Konsultasi Gratis</h4>
                </Link>
            </div>
        </div>
    );
}
