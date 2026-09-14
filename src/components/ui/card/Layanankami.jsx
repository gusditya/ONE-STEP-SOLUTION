import { useEffect, useState, useRef } from "react";
import "./Layanankami.css";
import { GraduationCap, WalletCards, MessageCircleMore, FileText, HousePlus } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Study Aboard",
        desc: "Bimbingan lengkap studi ke luar negeri dari awal hingga keberangkatan",
        icon: GraduationCap
    },
    {
        id: "02",
        title: "Visa Assistance",
        desc: "Proses Visa lebih mudah dengan tim ahli berpengalaman",
        icon: WalletCards
    },
    {
        id: "03",
        title: "English Course",
        desc: "Tingkatkan kemampuan bahasa inggris untuk masa depan global",
        icon: MessageCircleMore
    },
    {
        id: "04",
        title: "Translation",
        desc: "Layanan terjemahan dokumen resmi cepat, akurat, dan tersumpah",
        icon: FileText
    },
    {
        id: "05",
        title: "Accommodation",
        desc: "Bantuan akomodasi nyaman dan aman di negara tujuan",
        icon: HousePlus
    }
];

export default function Layanankami() {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [activeIndexes, setActiveIndexes] = useState([]);
    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Garis mulai aktif ketika container berada 60% dari viewport
            const startOffset = viewportHeight * 0.6;

            let progress = startOffset - rect.top;
            if (progress < 0) progress = 0;
            if (progress > rect.height) progress = rect.height;

            setScrollHeight(progress);

            const newActiveIndexes = [];
            itemRefs.current.forEach((el, index) => {
                if (el) {
                    const elTop = el.offsetTop + 40;
                    if (progress >= elTop) {
                        newActiveIndexes.push(index);
                    }
                }
            });
            setActiveIndexes(newActiveIndexes);
        };

        window.addEventListener("scroll", handleScroll);
        setTimeout(handleScroll, 100);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="Layanankami-timeline">
            <motion.div 
                className="title-layanankami flex flex-col gap-1 items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className="text-layanankami font-extrabold text-4xl">Layanan Kami</h2>
                <h4 className="text-layanankami text-lg text-gray-500">Solusi lengkap untuk mewujudkan impian studimu</h4>
            </motion.div>

            <div className="timeline-container" ref={containerRef}>
                <div className="timeline-bg-line"></div>
                <div className="timeline-active-line" style={{ height: `${scrollHeight}px` }}></div>

                {services.map((item, index) => {
                    const isEven = index % 2 === 0;
                    const isActive = activeIndexes.includes(index);

                    return (
                        <div
                            key={item.id}
                            ref={(el) => (itemRefs.current[index] = el)}
                            className={`timeline-row ${isEven ? 'left-row' : 'right-row'} ${isActive ? 'active' : ''}`}
                        >
                            <div className="timeline-dot-container">
                                <div className="timeline-dot"></div>
                            </div>

                            <div className="timeline-content-wrapper">
                                <motion.div 
                                    className="timeline-content"
                                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                    animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : (isEven ? -50 : 50) }}
                                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                                >
                                    <div className="timeline-number">{item.id}</div>
                                    <h3 className="timeline-title">
                                        {item.title}
                                    </h3>
                                    <p className="timeline-desc">{item.desc}</p>
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
