import React, { useState, useRef } from 'react';
import './question.css';
import Question from "../../../assets/picture/question.png";

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
    const answerRefs = useRef([]);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section-wrapper">
            <div className="faq-container">
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
                                        <svg className="faq-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                        </svg>
                                    </button>

                                    <div
                                        className="faq-answer"
                                        ref={(el) => (answerRefs.current[index] = el)}
                                        style={{ maxHeight: isOpen ? `${answerRefs.current[index]?.scrollHeight || 200}px` : '0px'
                                        }}
                                    >
                                        <div className="faq-answer-content">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="faq-illustration">
                        <img
                            src={Question}
                            alt="Maskot FAQ"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;
