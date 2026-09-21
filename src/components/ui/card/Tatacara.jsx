"use client"

import { MessageCircleMore, SearchCheck, FileText, FolderBookmark, Plane } from 'lucide-react';
import "./Tatacara.css";
import { motion } from "framer-motion";

const steps = [
    {
        id: 1,
        title: "Konsultasi",
        desc: "Diskusi gratis untuk memahami tujuan dan kebutuhan anda.",
        icon: MessageCircleMore
    },
    {
        id: 2,
        title: "Pilih Negara & Kampus",
        desc: "Kami bantu memilih negara dan kampus terbaik untuk anda.",
        icon: SearchCheck
    },
    {
        id: 3,
        title: "Persiapan Dokumen",
        desc: "Bimbingan lengkap dalam menyiapkan semua dokumen.",
        icon: FileText
    },
    {
        id: 4,
        title: "Proses Visa",
        desc: "Tim Ahli kami membantu proses visa hingga approved.",
        icon: FolderBookmark
    },
    {
        id: 5,
        title: "Berangkat & Sukses",
        desc: "Siap terbang dan memulai masa yang global Anda.",
        icon: Plane
    }
];

export default function Tatacara() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <div className="Tatacara">
            <motion.div
                className="Title-Tatacara"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <span className="Title-span1">Perjalanan Anda <h3 className="Title-span2">Bersama OSS</h3></span>
            </motion.div>

            <div className="Container-Card">
                <motion.div
                    className="timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <div className="timeline-line" />

                    {steps.map((step) => {
                        const Icon = step.icon;
                        return (
                            <motion.div key={step.id} className="Card-Tatacara" variants={itemVariants}>
                                <div className="Number">
                                    <div className="dot">{step.id}</div>
                                    <div className="circle">
                                        <div className="SubCard-Tatacara">
                                            <Icon color="White" size={36} />
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-item">
                                    <div className="Subtitle-Tatacara">
                                        <h3 className={`font-bold text-xl ${step.id === 2 ? 'w-60' : ''}`}>{step.title}</h3>
                                        <h4>{step.desc}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    )
}
