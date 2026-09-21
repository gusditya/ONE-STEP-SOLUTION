"use client"

import "./Country.css";

const background = '/assets/background/Worldmap.png';
const amerika = '/assets/country/amerikaflag.jpg';
const australia = '/assets/country/australiaflag.png';
const belanda = '/assets/country/belandaflag.jpg';
const belgia = '/assets/country/belgiaflag.jpg';
const canada = '/assets/country/canadaflag.png';
const china = '/assets/country/chinaflag.jpg';
const denmark = '/assets/country/denmarkflag.jpg';
const finlandia = '/assets/country/finlandiaflag.jpg';
const italia = '/assets/country/italiaflag.jpg';
const jepang = '/assets/country/jepangflag.jpg';
const jerman = '/assets/country/jermanflag.jpg';
const korea = '/assets/country/koreaflag.jpg';
const malaysia = '/assets/country/malaysiaflag.jpg';
const prancis = '/assets/country/prancisflag.jpg';
const singapura = '/assets/country/singaporeflag.png';
const spanyol = '/assets/country/spanyolflag.jpg';
const swiss = '/assets/country/swissflag.jpg';
const thailand = '/assets/country/thailandflag.jpg';
const UK = '/assets/country/UKflag.png';
const Vietnam = '/assets/country/vietnamflag.jpg';

const DataCountry = [
    {
        id: 1,
        title: "Amerika",
        image: amerika,
    },
    {
        id: 2,
        title: "Australia",
        image: australia,
    },
    {
        id: 3,
        title: "Belanda",
        image: belanda,
    },
    {
        id: 4,
        title: "Belgia",
        image: belgia,
    },
    {
        id: 5,
        title: "Kanada",
        image: canada,
    },
    {
        id: 6,
        title: "China",
        image: china,
    },
    {
        id: 7,
        title: "Denmark",
        image: denmark,
    },
    {
        id: 8,
        title: "Finlandia",
        image: finlandia,
    },
    {
        id: 9,
        title: "Italia",
        image: italia,
    },
    {
        id: 10,
        title: "Jepang",
        image: jepang,
    },
    {
        id: 11,
        title: "Jerman",
        image: jerman,
    },
    {
        id: 12,
        title: "Korea Selatan",
        image: korea,
    },
    {
        id: 13,
        title: "Malaysia",
        image: malaysia,
    },
    {
        id: 14,
        title: "Prancis",
        image: prancis,
    },
    {
        id: 15,
        title: "Singapura",
        image: singapura,
    },
    {
        id: 16,
        title: "Spanyol",
        image: spanyol,
    },
    {
        id: 17,
        title: "Swiss",
        image: swiss,
    },
    {
        id: 18,
        title: "Thailand",
        image: thailand,
    },
    {
        id: 19,
        title: "United Kingdom",
        image: UK,
    },
    {
        id: 20,
        title: "Vietnam",
        image: Vietnam,
    }
]

export default function Country() {
    return (
        <section className="country-section">
            <div className="country-background">
                <img src={background} alt="" />
            </div>

            <div className="country-content">
                <div className="country-header">
                    <p>DESTINASI STUDI</p>
                    <div className="title-country">
                        <h2> Pilihan Negara
                            <span> Impianmu</span>
                        </h2>
                        <p className="country-description"> Temukan berbagai pilihan negara terbaik untuk melanjutkan pendidikanmu. </p>
                    </div>
                </div>

                <div className="country-grid">
                    {DataCountry.map((item) => (
                        <div className="country-card" key={item.id} >
                            <img src={item.image} alt={item.title} className="country-flag" />
                            <h3>{item.title}</h3>
                        </div>))}
                </div>
            </div>
        </section>
    );
}
