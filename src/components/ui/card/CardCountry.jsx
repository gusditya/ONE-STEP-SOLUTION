import { Card as UICard } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import "./CardCountry.css";
import { motion } from "framer-motion";

const daftarNegara = [
    {
        id: 1,
        nama: "Australia",
        cardClass: "countrycard",
        list: ["250+ universitas", "Part Time Work", "PR Oportunity"],
    },
    {
        id: 2,
        nama: "Canada",
        cardClass: "countrycard1",
        list: ["200+ Universitas", "Post Study Work", "PR Oportunity"],
    },
    {
        id: 3,
        nama: "Jepang",
        cardClass: "countrycard2",
        list: ["120+ universitas", "Budaya Unik", "Teknologi Maju"],
    },
    {
        id: 4,
        nama: "United Kingdom",
        cardClass: "countrycard3",
        list: ["100+ universitas", "Shorter Duration", "Global Recognition"],
    },
    {
        id: 5,
        nama: "New Zealand",
        cardClass: "countrycard4",
        list: ["100+ universitas", "Quality Education", "Work While Study"],
    },
];

function CountryCardItem({ nama, cardClass, list, variants }) {
    return (
        <motion.div variants={variants} whileHover={{ scale: 1.05 }}>
            <UICard className={`${cardClass} w-70 h-60`}>
                <div className="flex-1"></div>
                <div className="subtitle-card">
                    <div className="Materi">
                        <h2 className="text-xl font-bold text-white">{nama}</h2>
                        <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>
                            {list.map((item, index) => (
                                <div key={index} className="text-card">
                                    <Check color="#093343" size={12} />
                                    <h4 className="listCountry text-white">{item}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="arrow-country">
                        <ArrowRight size={20} className="Icon-next" />
                    </div>
                </div>
            </UICard>
        </motion.div>
    );
}

export default function CardCountry() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };

    return (
        <div className="CardCountry">
            <motion.div 
                className="flex flex-col gap-1 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <h2 className="text1-cardcountry font-extrabold text-3xl">
                    Destinasi Studi Populer
                </h2>
                <h4 className="text1-cardcountry text-lg">
                    Temukan negara terbaik untuk masa depanmu
                </h4>
            </motion.div>

            <motion.div 
                className="AllCountry"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {daftarNegara.map((negara) => (
                    <CountryCardItem
                        key={negara.id}
                        nama={negara.nama}
                        cardClass={negara.cardClass}
                        list={negara.list}
                        variants={cardVariants}
                    />
                ))}
            </motion.div>
        </div>
    );
}
