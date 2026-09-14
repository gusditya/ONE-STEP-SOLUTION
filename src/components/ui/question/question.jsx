import React, { useState } from 'react';
import './question.css';
import Question from "../../../assets/picture/question.png";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
    {
        question: "Apakah harus punya IELTS untuk kuliah di luar negeri?",
        answer: "Tidak selalu. Beberapa universitas dan negara menyediakan jalur alternatif seperti sertifikat TOEFL, Duolingo English Test, atau program Pre-sessional English sebelum memulai perkuliahan utama."
    },
    {
        question: "Bagaimana jika saya pernah mengalami penolakan visa?",
        answer: "Penolakan visa sebelumnya bukan berarti Anda tidak bisa mengajukan kembali. Tim konsultan kami akan membantu mengevaluasi alasan penolakan, melengkapi berkas yang kurang, dan mempersiapkan pengajuan ulang secara lebih optimal."
    },
    {
        question: "Apakah kuliah di luar negeri bisa sambil bekerja?",
        answer: "Bisa! Sebagian besar negara mengizinkan pemegang visa pelajar untuk bekerja paruh waktu (part-time) hingga 20 jam per minggu selama masa kuliah, dan full-time saat libur semester."
    }
];

const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section-wrapper">
            <motion.div
                className="faq-container"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
            >
                <div className="faq-header">
                    <span className="faq-badge">Bantuan & Informasi</span>
                    <h2>Pertanyaan Yang Sering Ditanyakan</h2>
                </div>

                <div className="faq-content">
                    <div className="faq-list">
                        {faqData.map((item, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div
                                    key={index}
                                    className={`faq-item ${isOpen ? 'active' : ''}`}>
                                    <button
                                        className="faq-button"
                                        onClick={() => toggleAccordion(index)}
                                        aria-expanded={isOpen}>
                                        <span>{item.question}</span>
                                        <motion.svg
                                            className="faq-icon"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                        </motion.svg>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                className="faq-answer"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                style={{ overflow: 'hidden' }}
                                            >
                                                <div className="faq-answer-content">
                                                    {item.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    <motion.div
                        className="faq-illustration"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                    >
                        <img
                            src={Question}
                            alt="Maskot FAQ"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default FaqSection;
