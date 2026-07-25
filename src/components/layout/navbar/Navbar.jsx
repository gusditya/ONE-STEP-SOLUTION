import './Navbar.css';
import Logo from '../../../assets/Logo.png';
import { Calendar } from "lucide-react";

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Logo-navbar">
                <img src={Logo} className="Image" />
                <div className="title-navbar">
                    <h2>One Step</h2><h3>Solution Bali</h3>

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

            <div className="Nav2">
                <Calendar size={18} className="calendar-icon"/>
                <a href="#" className="a_start">Konsultasi Gratis</a>
            </div>
        </div>
    )
}
