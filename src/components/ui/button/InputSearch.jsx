import "./InputSearch.css";
import { GraduationCap } from "lucide-react";
import { Landmark } from "lucide-react";
import { Globe } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export default function InputSearch() {
    return (
        <div className="Bottom-navbar">
            <div className="NavbarCard">
                <div className="Icon-box">
                    <GraduationCap size={38} color="#2563EB" />
                </div>

                <div className="NavbarText">
                    <h2>37.000+</h2>
                    <h3>Alumni Sukses</h3>
                    <h4>Telah berangkat ke luar negeri</h4>
                </div>
            </div>

            <div className="NavbarCard">
                <div className="Icon-box">
                    <Landmark size={38} color="#2563EB" />
                </div>

                <div className="NavbarText">
                    <h2>300+</h2>
                    <h3>Universitas Partner</h3>
                    <h4>Bekerja sama dengan Universitas terbaik</h4>
                </div>
            </div>

            <div className="NavbarCard">
                <div className="Icon-box">
                    <Globe size={38} color="#2563EB" />
                </div>

                <div className="NavbarText">
                    <h2>15+</h2>
                    <h3>Negara Tujuan</h3>
                    <h4>Pilihan negara favorit untuk masa depanmu</h4>
                </div>
            </div>

            <div className="NavbarCard">
                <div className="Icon-box">
                    <ShieldCheck size={38} color="#2563EB" />
                </div>

                <div className="NavbarText">
                    <h2>98%</h2>
                    <h3>Visa Success Rate</h3>
                    <h4>Tingkat keberhasilan visa yang tinggi</h4>
                </div>
            </div>
        </div>
    )
}
