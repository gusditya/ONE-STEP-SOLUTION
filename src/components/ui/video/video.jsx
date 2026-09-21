"use client"

import "./video.css";
import { motion } from "framer-motion";

export default function video() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <section className="video-section">
            <motion.div 
                className="video-header"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <span>Video Edukasi</span>
                <h2>Belajar Bersama One Step Solution</h2>
                <p>
                    Temukan berbagai panduan mengenai studi,
                    persiapan keberangkatan,
                    hingga peluang karier di luar negeri.
                </p>
            </motion.div>

            <motion.div 
                className="video-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                <motion.div className="video-card" variants={cardVariants} whileHover={{ y: -5 }}>
                    <iframe src="https://www.youtube.com/embed/xKatx3USazQ"
                        allowFullScreen></iframe>
                    <div className="video-content">
                        <h3>Siapa Bilang Kuliah Luar Negeri Susah?</h3>
                        <p>
                            Mungkin mereka belum tahu caranya yang benar. Temukan langkahmu bersama kami.
                        </p>
                        <a href="https://www.youtube.com/watch?v=xKatx3USazQ" target="_blank" className="watch-btn">
                            ▶ Tonton Video
                        </a>
                    </div>
                </motion.div>

                <motion.div className="video-card" variants={cardVariants} whileHover={{ y: -5 }}>
                    <iframe src="https://www.youtube.com/embed/BdcyBPoG-kY"
                        allowFullScreen></iframe>
                    <div className="video-content">
                        <h3>Langkah pertamamu menuju Study & Karir Luar Negeri</h3>
                        <p>
                            Jangan khawatir kami akan menuntunmu dari awal hingga berhasil kuliah dan karier di luar negeri.
                        </p>
                        <a href="https://www.youtube.com/watch?v=BdcyBPoG-kY" target="_blank" className="watch-btn">
                            ▶ Tonton Video
                        </a>
                    </div>
                </motion.div>

                <motion.div className="video-card" variants={cardVariants} whileHover={{ y: -5 }}>
                    <iframe src="https://www.youtube.com/embed/Py1jA2EjCmk"
                        allowFullScreen></iframe>
                    <div className="video-content">
                        <h3>Kesuksesan Itu 80%-Nya Adalah Memulai</h3>
                        <p>
                            Pertimbangkan dalam memilih negara tujuan, mulai dari kualitas pendidikan, biaya hidup, dan peluang kerja.
                        </p>
                        <a href="https://www.youtube.com/watch?v=Py1jA2EjCmk" target="_blank" className="watch-btn">
                            ▶ Tonton Video
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
