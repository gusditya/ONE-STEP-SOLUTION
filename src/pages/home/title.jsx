import "./title.css";
import { ArrowRight } from "lucide-react";

export default function title() {
    return (
        <div className="title-container">
            <div className="subtitle">
                <h3>#Education Consultant di Bali</h3>
            </div>

            <div className="title">
                <h1 className="text1">Your Dream.</h1>
                <h1 className="text2">Our Mission.</h1>
            </div>

            <div className="subtitle-1">
                <h4>Kami membantu siswa Indonesia meraih pendidikan
                    berkualitas di luar negeri dengan bimbingan profesional,
                    proses mudah, dan hasil nyata
                </h4>
            </div>

            <div className="title-button">
                <button className="Button1">Konsultasi Gratis
                <ArrowRight size={18} className="btn"/>
                </button>
                <button className="Button2">Explore Negara
                <ArrowRight size={18} className="btn"/>
                </button>
            </div>
        </div>
    )
}
