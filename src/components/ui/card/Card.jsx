import "./Card.css";
import Pengalaman1 from "../../../assets/pengalaman/pengalaman1.png"
import Pengalaman2 from "../../../assets/pengalaman/pengalaman2.png"
import Pengalaman3 from "../../../assets/pengalaman/pengalaman3.png"
import Pengalaman4 from "../../../assets/pengalaman/pengalaman4.png"
import backgroundPeople from "../../../assets/background/background_people.png"
import Rectangle from "../../../assets/background/Rectangle.png"

const pengalamanData = [
    {
        id: 1,
        image: Pengalaman4,
        title: "Ranggita Pramesti",
        alumni: "Alumni SMAN 1 Denpasar",
        description: "Sebagai alumni SMAN 1 Denpasar, punya impian buat lanjut kuliah ke Australia sempat bikin bingung urusan berkasnya. Untung dibantu sama tim OSS Bali! Dari awal konsultasi sampai akhirnya lolos ke Curtin University, semuanya diarahin dengan jelas dan lancar banget. Thank you so much, OSS Bali, udah jadi jembatan buat raih impian ini!",
    },
    {
        id: 2,
        image: Pengalaman3,
        title: "Mutia Hapsari",
        alumni: "Alumni OSS Bali",
        description: "Terimakasih oss bali sudah membantu saya menggapai mimpi untuk lanjut kuliah di luar negeri. senang akhirnya bisa kuliah di perth,  semuanya diarahin dengan jelas dan lancar banget. Thank you so much, OSS Bali, udah jadi jembatan buat raih impian ini!",
    },
    {
        id: 3,
        image: Pengalaman1,
        title: "Made Love Wijaya",
        alumni: "Alumni OSS Bali",
        description: "Gak nyangka bisa kuliah di Universitas dengan murah, semua berawal dari konsultasi di OSS Bali. Terima kasih sudah bantu saya bisa kuliah di Edith Cowan University. Semoga saya bisa sukses di Perth dan OSS Bali juga semakin jaya. amin!!",
    },
    {
        id: 4,
        image: Pengalaman2,
        title: "Dwi Kade Arika",
        alumni: "Alumni OSS Bali",
        description: "Terima kasih banyak OSS Bali! Berkat bantuan tim yang super fast respon dan profesional, proses pengurusan kuliah saya ke Victoria University (VU) jadi lancar banget dan tanpa ribet. Highly recommended buat yang mau kuliah ke luar negeri!",
    }
];

function CardAlumni({ image, title, alumni, description }) {
    return (
        <article className="card-alumni-item">
            <img src={Rectangle} alt="" className="card-background" />

            <div className="card-alumni-left">
                <img src={backgroundPeople} alt="" className="bg-people-img" />
                <img src={image} alt={title} className="alumni-photo" />
            </div>

            <div className="card-alumni-right">
                <div className="card-alumni-content">
                    <h2 className="alumni-name">{title}</h2>

                    <div className="alumni-badge">
                        <span className="badge-icon">🎓</span>
                        <span className="badge-text">
                            {alumni}
                        </span>
                    </div>

                    <p className="alumni-description">{description}</p>
                </div>
            </div>
        </article>
    );
}

export default function Card() {
    return (
        <div className="Card-Pengalaman">
            <div className="Card-Pengalaman-Title">
                <div className="Card-Pengalaman-Title-Text">
                    <h3>TESTIMONI ALUMNI</h3>
                </div>

                <div className="Title-Card-Pengalaman">
                    <h1>Apa Kata Mereka</h1>
                    <h3>Kisah nyata dari para alumni yang telah meraih mimpi bersama OSS Bali</h3>
                </div>
            </div>

            <div className="Card-Pengalaman-text">
                {pengalamanData.map((pengalaman) => (
                    <CardAlumni
                        key={pengalaman.id}
                        image={pengalaman.image}
                        title={pengalaman.title}
                        alumni={pengalaman.alumni}
                        description={pengalaman.description}
                    />
                ))}
            </div>
        </div>
    );
}
