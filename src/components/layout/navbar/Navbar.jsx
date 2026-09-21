import './Navbar.css';
import Logo from '../../../assets/Logo.png';
import { Calendar } from "lucide-react";
import { NavLink, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar({ user, onLogout }) {
    const [scrolled, setScrolled] = useState(false);

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
            <Link to="/" className="Logo-navbar">
                <img src={Logo} className="Image" alt="Logo" />
                <div className="title-navbar">
                    <h2>One Step</h2>
                    <h3>Solution Bali</h3>
                </div>
            </Link>

            <ul className="Nav1">
                <li>
                    <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Beranda</NavLink>
                </li>
                <li>
                    <NavLink to="/event" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Event</NavLink>
                </li>
                <li>
                    <NavLink to="/mitra" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Mitra</NavLink>
                </li>
                <li>
                    <NavLink to="/kampus" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Kampus</NavLink>
                </li>
                <li>
                    <NavLink to="/berita" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Berita</NavLink>
                </li>
                <li>
                    <NavLink to="/tentang-kami" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Tentang Kami</NavLink>
                </li>
                <li>
                    <NavLink to="/karier" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Karier</NavLink>
                </li>
            </ul>

            <div className="Nav2" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Link to="/konsultasi" className="a_start" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} className="calendar-icon" />
                    <h4>Konsultasi Gratis</h4>
                </Link>
            </div>
        </div>
    );
}
