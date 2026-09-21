"use client"

import { Check, ArrowRight } from "lucide-react";
import "./CardCountry.css";
import { motion } from "framer-motion";

const coverAustralia = '/assets/country/australia.png';
const coverCanada = '/assets/country/Canada.jpg';
const coverJepang = '/assets/country/jepang.jpg';
const coverUK = '/assets/country/UK.png';
const coverNZ = '/assets/country/NZ.jpg';
const coverFinlandia = '/assets/country/finlandia.jpg';
const coverPrancis = '/assets/country/prancis.jpg';

const flagAustralia = '/assets/country/australiaflag.png';
const flagCanada = '/assets/country/canadaflag.png';
const flagJepang = '/assets/country/jepangflag.jpg';
const flagUK = '/assets/country/UKflag.png';
const flagNZ = '/assets/country/NZflag.jpg';
const flagFinlandia = '/assets/country/finlandiaflag.jpg';
const flagPrancis = '/assets/country/prancisflag.jpg';

const daftarNegara = [
    {
        id: 1,
        nama: "Australia",
        cover: coverAustralia,
        flag: flagAustralia,
        list: ["250+ universitas", "Part Time Work", "PR Oportunity"],
    },
    {
        id: 2,
        nama: "Canada",
        cover: coverCanada,
        flag: flagCanada,
        list: ["200+ Universitas", "Post Study Work", "PR Oportunity"],
    },
    {
        id: 3,
        nama: "Jepang",
        cover: coverJepang,
        flag: flagJepang,
        list: ["120+ universitas", "Budaya Unik", "Teknologi Maju"],
    },
    {
        id: 4,
        nama: "United Kingdom",
        cover: coverUK,
        flag: flagUK,
        list: ["100+ universitas", "Shorter Duration", "Global Recognition"],
    },
    {
        id: 5,
        nama: "New Zealand",
        cover: coverNZ,
        flag: flagNZ,
        list: ["100+ universitas", "Quality Education", "Work While Study"],
    },
    {
        id: 6,
        nama: "Finlandia",
        cover: coverFinlandia,
        flag: flagFinlandia,
        list: ["100+ universitas", "Shorter Duration", "Global Recognition"],
    },
    {
        id: 7,
        nama: "Prancis",
        cover: coverPrancis,
        flag: flagPrancis,
        list: ["100+ universitas", "Quality Education", "Work While Study"],
    },
    {
        id:8,
        nama: "Australia",
        cover: coverAustralia,
        flag: flagAustralia,
        list: ["250+ universitas", "Part Time Work", "PR Oportunity"],
    },
    {
        id: 9,
        nama: "Canada",
        cover: coverCanada,
        flag: flagCanada,
        list: ["200+ Universitas", "Post Study Work", "PR Oportunity"],
    },
    {
        id: 10,
        nama: "Jepang",
        cover: coverJepang,
        flag: flagJepang,
        list: ["120+ universitas", "Budaya Unik", "Teknologi Maju"],
    }
];

function CountryCardItem({ nama, cover, flag, list, variants }) {
    return (
        <motion.article
            className="dest-card"
            variants={variants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
        >
            <div
                className="dest-card__media"
                style={{ backgroundImage: `url(${cover})` }}
                role="img"
                aria-label={`Ilustrasi destinasi studi ${nama}`}
            >
                <div className="dest-card__scrim" aria-hidden />
            </div>

            <div className="dest-card__content">
                <div className="dest-card__head">
                    <div className="dest-card__title-row">
                        {flag ? (
                            <img
                                src={flag}
                                alt=""
                                className="dest-card__flag"
                                loading="lazy"
                            />
                        ) : (
                            <span className="dest-card__flag dest-card__flag--placeholder" aria-hidden />
                        )}
                        <h3 className="dest-card__title">{nama}</h3>
                    </div>
                    <span className="dest-card__cta" aria-hidden>
                        <ArrowRight size={18} className="dest-card__cta-icon" />
                    </span>
                </div>

                <ul className="dest-card__list">
                    {list.map((item, index) => (
                        <li key={index} className="dest-card__list-item">
                            <span className="dest-card__check">
                                <Check size={11} strokeWidth={3} />
                            </span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.article>
    );
}

export default function CardCountry() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 },
        },
    };

    return (
        <section className="CardCountry" aria-labelledby="destinasi-studi-heading">
            <motion.header
                className="CardCountry-header"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100 }}
            >
                <span className="CardCountry-badge">Destinasi</span>
                <h2 id="destinasi-studi-heading" className="CardCountry-title">
                    Destinasi Studi Populer
                </h2>
                <p className="CardCountry-subtitle">
                    Temukan negara terbaik untuk masa depanmu
                </p>
            </motion.header>

            <motion.div
                className="AllCountry dest-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {daftarNegara.map((negara) => (
                    <CountryCardItem
                        key={negara.id}
                        nama={negara.nama}
                        cover={negara.cover}
                        flag={negara.flag}
                        list={negara.list}
                        variants={cardVariants}
                    />
                ))}
            </motion.div>
        </section>
    );
}
