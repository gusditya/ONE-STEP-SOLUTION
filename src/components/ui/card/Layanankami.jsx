import "./Layanankami.css";
import { GraduationCap } from "lucide-react";
import { MessageCircleMore } from 'lucide-react';
import { FileText } from 'lucide-react';
import { WalletCards } from 'lucide-react';
import { HousePlus } from 'lucide-react';

export default function Layanankami() {
    return (
        <div className="Layanankami flex flex-col gap-3">
            <div className="title-layanankami flex flex-col gap-3">
                <h2 className="text-layanankami font-bold text-3xl">Layanan Kami</h2>
                <h4 className="text-layanankami">Solusi lengkap untuk mewujudkan impian studimu</h4>
            </div>

            <div className="Card-layanankami">
                <div className="Card1-layanankami">
                    <div className="IconBox"><GraduationCap size={36} /></div>
                    <div className="Box-text">
                        <h3 className="font-bold text-lg">Study Aboard</h3>
                        <h4>Bimbingan lengkap studi ke luar negeri dari awal hingga keberangkatan</h4>
                    </div>

                </div>

                <div className="Card1-layanankami">
                    <div className="IconBox"><WalletCards size={36} /></div>
                    <div className="Box-text">
                        <h3 className="font-bold text-lg">Visa Assistance</h3>
                        <h4>Proses Visa lebih mudah dengan tim ahli berpengalaman</h4>
                    </div>

                </div>

                <div className="Card1-layanankami">
                    <div className="IconBox"><MessageCircleMore size={36} /></div>
                    <div className="Box-text">
                        <h3 className="font-bold text-lg">English Course</h3>
                        <h4>Tingkatkan kemampuan bahasa inggris untuk masa depan global</h4>
                    </div>

                </div>

                <div className="Card1-layanankami">
                    <div className="IconBox"><FileText size={36} /></div>
                    <div className="Box-text">
                        <h3 className="font-bold text-lg">Translation</h3>
                        <h4>Layanan terjemahan dokumen resmi cepat, akurat, dan tersumpah</h4>
                    </div>

                </div>

                <div className="Card1-layanankami">
                    <div className="IconBox"><HousePlus size={36} /></div>
                    <div className="Box-text">
                        <h3 className="font-bold text-lg">Accommodation</h3>
                        <h4>Bantuan akomodasi nyaman dan aman di negara tujuan</h4>
                    </div>

                </div>
            </div>
        </div>
    )
}
