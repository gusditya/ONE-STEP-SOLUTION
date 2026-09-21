"use client"

import "./CardInformation.css";
import { motion } from "framer-motion";

const Canada = '/assets/country/canadaflag.png';
const UK = '/assets/country/UKflag.png';
const Australia = '/assets/country/australiaflag.png';
const Singapore = '/assets/country/singaporeflag.png';

export default function CardInformation() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <motion.div
            className="CardInformation"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className="Canada" variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <div className="countryflag">
                    <img src={Canada} className="country" />
                </div>
                <div className="TextCountry">
                    <h4 className="font-bold text-md">Canada</h4>
                    <h5>Toronto</h5>
                </div>
            </motion.div>

            <motion.div className="United-Kingdom" variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <div className="countryflag">
                    <img src={UK} className="country" />
                </div>
                <div className="TextCountry">
                    <h4 className="font-bold text-md">UK</h4>
                    <h5>London</h5>
                </div>
            </motion.div>

            <motion.div className="Australia" variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <div className="countryflag">
                    <img src={Australia} className="country" />
                </div>
                <div className="TextCountry">
                    <h4 className="font-bold text-md">Australia</h4>
                    <h5>Sydney</h5>
                </div>
            </motion.div>

            <motion.div className="Singapore" variants={cardVariants} whileHover={{ scale: 1.05 }}>
                <div className="countryflag">
                    <img src={Singapore} className="country" />
                </div>
                <div className="TextCountry">
                    <h4 className="font-bold text-md">Singapura</h4>
                    <h5>Woodland</h5>
                </div>
            </motion.div>
        </motion.div>
    )
}
