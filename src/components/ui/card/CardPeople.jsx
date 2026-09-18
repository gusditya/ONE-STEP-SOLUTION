import "./CardPeople.css";
import { useRef } from "react";
import { motion } from "framer-motion";

import Nadya from "../../../assets/people/nadya.png";
import Astina from "../../../assets/people/astina.png";
import Ayu from "../../../assets/people/ayu.png";
import Jani from "../../../assets/people/jani.png";
import Rafli from "../../../assets/people/rafli.png";

export default function Consultant() {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -595,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 595,
            behavior: "smooth",
        });
    };

    return (
        <section className="consultant-section">

            <motion.div
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <span className="badge">OUR CONSULTANT</span>

                <h2 className="text-cardpeople">Temukan Solusimu Bersama Ahli Kami</h2>

                <p>
                    Konsultasikan rencana studi luar negerimu bersama tim profesional
                    yang siap membimbing dari awal hingga keberangkatan.
                </p>
            </motion.div>

            <motion.div
                className="consultant-wrapper"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8 }}
            >
                <button className="arrow left" onClick={scrollLeft}>&#10094;</button>

                <div className="consultant-container" ref={sliderRef}>
                    <div className="consultant-card">
                        <img src={Nadya} />

                        <div className="overlay">
                            <h3>Nadya Ananda Putri</h3>
                            <p>Education Consultant</p>
                        </div>
                    </div>

                    <div className="consultant-card">
                        <img src={Rafli} />

                        <div className="overlay">
                            <h3>Rafli Prayanto</h3>
                            <p>Executive International Education Marketing</p>
                        </div>
                    </div>

                    <div className="consultant-card">
                        <img src={Jani} />

                        <div className="overlay">
                            <h3>Jani Antari</h3>
                            <p>Education Consultant</p>
                        </div>
                    </div>

                    <div className="consultant-card">
                        <img src={Ayu} />

                        <div className="overlay">
                            <h3>Ayu Mahadewi</h3>
                            <p>Education Consultant</p>
                        </div>
                    </div>

                    <div className="consultant-card">
                        <img src={Astina} />

                        <div className="overlay">
                            <h3>Astina Putra</h3>
                            <p>Education Consultant</p>
                        </div>
                    </div>

                </div>

                <button
                    className="arrow right"
                    onClick={scrollRight}
                >
                    &#10095;
                </button>

            </motion.div>

        </section>
    );
}
