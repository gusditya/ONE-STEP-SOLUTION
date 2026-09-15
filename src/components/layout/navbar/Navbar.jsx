import './Navbar.css';
import Logo from '../../../assets/Logo.png';
import { Calendar, LogOut } from "lucide-react";
import { NavLink, Link } from 'react-router-dom';
import { supabase } from '../../ui/form/supabaseClient';

export default function Navbar({ user, onLogout }) {

    const handleLogout = async () => {
        localStorage.removeItem('user_session');
        await supabase.auth.signOut();
        if (onLogout) onLogout();
    };

    return (
        <div className="Navbar">
            <Link to="/" className="Logo-navbar">
                <img src={Logo} className="Image" alt="Logo" />
                <div className="title-navbar">
                    <h2>One Step</h2>
                    <h3>Solution Bali</h3>
                </div>
            </Link>

            <ul className="Nav1">
                <li className="li1">
                    <NavLink to="/" className={({ isActive }) => isActive ? "a1 active" : "a1"}>Beranda</NavLink>
                </li>
                <li className="li2">
                    <NavLink to="/event" className={({ isActive }) => isActive ? "a2 active" : "a2"}>Event</NavLink>
                </li>
                <li className="li3">
                    <NavLink to="/mitra" className={({ isActive }) => isActive ? "a3 active" : "a3"}>Mitra</NavLink>
                </li>
                <li className="li4">
                    <NavLink to="/kampus" className={({ isActive }) => isActive ? "a4 active" : "a4"}>Kampus</NavLink>
                </li>
                <li className="li5">
                    <NavLink to="/berita" className={({ isActive }) => isActive ? "a5 active" : "a5"}>Berita</NavLink>
                </li>
                <li className="li5">
                    <NavLink to="/tentang-kami" className={({ isActive }) => isActive ? "a5 active" : "a5"}>Tentang Kami</NavLink>
                </li>
                <li className="li5">
                    <NavLink to="/karier" className={({ isActive }) => isActive ? "a5 active" : "a5"}>Karier</NavLink>
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
