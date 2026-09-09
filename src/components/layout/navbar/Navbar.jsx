import './Navbar.css';
import Logo from '../../../assets/Logo.png';
import { Calendar, LogOut } from "lucide-react";
import { supabase } from '../../ui/form/supabaseClient';

export default function Navbar({ user, onLogout }) {

    const handleLogout = async () => {

    localStorage.removeItem('user_session');
    await supabase.auth.signOut();
    if (onLogout) onLogout();
};

    return (
        <div className="Navbar">
            <div className="Logo-navbar">
                <img src={Logo} className="Image" alt="Logo" />
                <div className="title-navbar">
                    <h2>One Step</h2>
                    <h3>Solution Bali</h3>
                </div>
            </div>

            <ul className="Nav1">
                <li className="li1"><a href="#" className="a1">Beranda</a></li>
                <li className="li2"><a href="#" className="a2">Event</a></li>
                <li className="li3"><a href="#" className="a3">Mitra</a></li>
                <li className="li4"><a href="#" className="a4">Kampus</a></li>
                <li className="li5"><a href="#" className="a5">Berita</a></li>
                <li className="li5"><a href="#" className="a5">Tentang Kami</a></li>
                <li className="li5"><a href="#" className="a5">Karier</a></li>
            </ul>

            <div className="Nav2" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <a href="#" className="a_start" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={18} className="calendar-icon" />
                    <span>Konsultasi Gratis</span>
                </a>

                {/* TOMBOL LOGOUT */}
                {/* <button
                    onClick={handleLogout}
                    className="btn-logout"
                    title="Keluar / Logout">
                    <LogOut size={18} />
                    <span>Keluar</span>
                </button> */}
            </div>
        </div>
    );
}
