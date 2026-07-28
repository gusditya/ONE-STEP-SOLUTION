import './Footer.css';
import LogoOSS from '../../../assets/Logo.png';
import { MapPin, Phone, Mail } from "lucide-react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok, FaLinkedinIn, FaYoutube,} from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="All-footer">

            <div className="footer-wrapper">
                <div className="Footer-left">
                    <img src={LogoOSS} />

                    <div className="Location">
                        <MapPin size={22} />
                        <p className="w-100 leading-relaxed">Jalan Hayam Wuruk No 66B Lantai 2, Sumerta Kelod,
                            Denpasar Timur, Kota Denpasar, Bali, Indonesia, 80239</p>
                    </div>

                    <div className="Telepon">
                        <Phone size={22} />
                        <p>+62 877 0509 2020</p>
                    </div>

                    <div className="Mail">
                        <Mail size={22} />
                        <p>info@onestepsolutionbali.com</p>
                    </div>
                </div>

                <div className="Footer-right">
                    <div className="Kampus">
                        <h2>Kampus & Mitra</h2>
                        <div className="list-a">
                            <a href="#">Tentang OSS</a>
                            <a href="#">Kampus</a>
                            <a href="#">Mitra</a>
                            <a href="#">Berita & Artikel</a>
                        </div>
                    </div>

                    <div className="Layanan">
                        <h2>Layanan</h2>
                        <div className="list-a">
                            <a href="#">Studi Luar Negeri</a>
                            <a href="#">Pengurusan Visa</a>
                            <a href="#">Kursus Bahasa Inggris</a>
                            <a href="#">Pemesanan Akomodasi</a>
                            <a href="#">Penerjemah Dokumen</a>
                        </div>
                    </div>

                    <div className="dukungan">
                        <h2>Dukungan</h2>
                        <div className="list-a">
                            <a href="#">Karier di OSS</a>
                            <a href="#">Event & Webinar</a>
                            <a href="#">Form Mitra</a>
                            <a href="#">Kalkulator Biaya Studi</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Footer-Bottom">
                <h3>© 2026 OSS Bali. Hak Cipta Dilindungi.</h3>

                <div className="logo-app">
                    <a><FaInstagram /></a>
                    <a><FaFacebookF /></a>
                    <a><FaWhatsapp /></a>
                    <a><FaTiktok /></a>
                    <a><FaLinkedinIn /></a>
                    <a><FaYoutube /></a>

                </div>
            </div>
        </footer>
    );
}
