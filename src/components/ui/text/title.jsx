import "./title.css";
import { ArrowRight } from "lucide-react";
import Toga from "../../../assets/toga.png";
import { motion } from "framer-motion";

export default function title() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <motion.div
            className="title-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="background"></div>
            <motion.div className="title" variants={itemVariants}>
                <motion.div
                    className="toga-container"
                    initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", delay: 0.5, stiffness: 200 }}
                >
                </motion.div>
                <h1 className="text1">Your Dream.</h1>
                <h1 className="text2">Our Mission.</h1>
            </motion.div>

            <motion.div className="subtitle-1" variants={itemVariants}>
                <h4>Kami membantu siswa Indonesia meraih pendidikan
                    berkualitas di luar negeri dengan bimbingan profesional,
                    proses mudah, dan hasil nyata
                </h4>
            </motion.div>

            <motion.div className="title-button" variants={itemVariants}>
                <motion.button
                    className="Button1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >Konsultasi Gratis
                    <ArrowRight size={18} className="btn" />
                </motion.button>
                <motion.button
                    className="Button2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >Explore Negara
                    <ArrowRight size={18} className="btn" />
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
