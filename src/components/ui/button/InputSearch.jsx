import "./InputSearch.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }) {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        let frame;
        let startTime;
        const duration = 1800;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;

            const progress = Math.min(
                (timestamp - startTime) / duration,
                1
            );

            // Angka bergerak cepat seperti random
            if (progress < 0.75) {
                const randomNumber = Math.floor(
                    Math.random() * target
                );

                setNumber(randomNumber);
                frame = requestAnimationFrame(animate);
            } else {
                // Mendekati angka asli
                const current = Math.floor(
                    target * progress
                );

                setNumber(current);

                if (progress < 1) {
                    frame = requestAnimationFrame(animate);
                }
            }
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, [target]);

    return (
        <span>
            {number.toLocaleString("id-ID")}
            {suffix}
        </span>
    );
}

export default function InputSearch() {
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                staggerChildren: 0.12,
                duration: 0.6,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 20,
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
            },
        },
    };

    return (
        <motion.div className="Bottom-navbar" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2, }}>
            <motion.div className="NavbarCard" variants={cardVariants} whileHover={{ y: -4 }}>
                <div className="NavbarText">
                    <h2><AnimatedNumber target={37000} suffix="+"/></h2>
                    <h3>Alumni Sukses</h3>
                    <h4>Telah berangkat ke luar negeri</h4>
                </div>
            </motion.div>


            <motion.div
                className="NavbarCard"
                variants={cardVariants}
                whileHover={{ y: -4 }}
            >
                <div className="NavbarText">
                    <h2>
                        <AnimatedNumber
                            target={300}
                            suffix="+"
                        />
                    </h2>

                    <h3>Universitas Partner</h3>

                    <h4>
                        Bekerja sama dengan universitas terbaik
                    </h4>
                </div>
            </motion.div>


            <motion.div
                className="NavbarCard"
                variants={cardVariants}
                whileHover={{ y: -4 }}
            >
                <div className="NavbarText">
                    <h2>
                        <AnimatedNumber
                            target={15}
                            suffix="+"
                        />
                    </h2>

                    <h3>Negara Tujuan</h3>

                    <h4>
                        Pilihan negara favorit untuk masa depanmu
                    </h4>
                </div>
            </motion.div>


            <motion.div
                className="NavbarCard"
                variants={cardVariants}
                whileHover={{ y: -4 }}
            >
                <div className="NavbarText">
                    <h2>
                        <AnimatedNumber
                            target={98}
                            suffix="%"
                        />
                    </h2>

                    <h3>Visa Success Rate</h3>

                    <h4>
                        Tingkat keberhasilan visa yang tinggi
                    </h4>
                </div>
            </motion.div>

        </motion.div>
    );
}
