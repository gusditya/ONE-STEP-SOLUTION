import "./InputSearch.css";
import { GraduationCap, Landmark, Globe, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function InputSearch() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        },
    };

    return (
        <motion.div 
            className="Bottom-navbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.div className="NavbarCard" variants={cardVariants} whileHover={{ y: -5 }}>
                <div className="Icon-box">
                    <GraduationCap size={30} color="#093343" />
                </div>
                <div className="NavbarText">
                    <h2 className="font-bold text-2xl">37.000+</h2>
                    <h3 className="font-bold">Alumni Sukses</h3>
                    <h4>Telah berangkat ke luar negeri</h4>
                </div>
            </motion.div>

            <motion.div className="NavbarCard" variants={cardVariants} whileHover={{ y: -5 }}>
                <div className="Icon-box">
                    <Landmark size={30} color="#093343" />
                </div>
                <div className="NavbarText">
                    <h2 className="font-bold text-2xl">300+</h2>
                    <h3 className="font-bold">Universitas Partner</h3>
                    <h4>Bekerja sama dengan Universitas terbaik</h4>
                </div>
            </motion.div>

            <motion.div className="NavbarCard" variants={cardVariants} whileHover={{ y: -5 }}>
                <div className="Icon-box">
                    <Globe size={30} color="#093343" />
                </div>
                <div className="NavbarText">
                    <h2 className="font-bold text-2xl">15+</h2>
                    <h3 className="font-bold">Negara Tujuan</h3>
                    <h4>Pilihan negara favorit untuk masa depanmu</h4>
                </div>
            </motion.div>

            <motion.div className="NavbarCard" variants={cardVariants} whileHover={{ y: -5 }}>
                <div className="Icon-box">
                    <ShieldCheck size={30} color="#093343" />
                </div>
                <div className="NavbarText">
                    <h2 className="font-bold text-2xl">98%</h2>
                    <h3 className="font-bold">Visa Success Rate</h3>
                    <h4>Tingkat keberhasilan visa yang tinggi</h4>
                </div>
            </motion.div>
        </motion.div>
    )
}
