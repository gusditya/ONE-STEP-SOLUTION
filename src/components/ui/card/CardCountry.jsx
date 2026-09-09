import { Card as UICard } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import "./CardCountry.css";

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

function CountryCardItem({ nama, cardClass, list }) {
    return (
        <div>
            <UICard className={`${cardClass} w-70 h-60`}>
                <div className="flex-1"></div>

                <div className="subtitle-card">
                    <div className="Materi">
                        <h2 className="text-xl font-bold text-white">{nama}</h2>

                        <div style={{ gap: "5px", display: "flex", flexDirection: "column" }}>
                            {list.map((item, index) => (
                                <div key={index} className="text-card">
                                    <Check color="#2563EB" size={12} />
                                    <h4 className="listCountry text-white">{item}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="arrow-country">
                        <ArrowRight size={24} className="Icon-next" />
                    </div>
                </div>
            </UICard>
        </div>
    );
}

export default function CardCountry() {
    return (
        <div className="CardCountry">
            <div className="flex flex-col gap-1 mb-6">
                <h2 className="text1-cardcountry font-extrabold text-3xl">
                    Destinasi Studi Populer
                </h2>
                <h4 className="text1-cardcountry text-lg">
                    Temukan negara terbaik untuk masa depanmu
                </h4>
            </div>

            <div className="AllCountry">
                {daftarNegara.map((negara) => (
                    <CountryCardItem
                        key={negara.id}
                        nama={negara.nama}
                        cardClass={negara.cardClass}
                        list={negara.list}
                    />
                ))}
            </div>
        </div>
    );
}
