import "./Card.css";
import australia from "../../../assets/country/australia.png";
import perth from "../../../assets/pengalaman/Perth.png";
import vu from "../../../assets/pengalaman/VU.png";
import ecu from "../../../assets/pengalaman/ECU.png"
import Pengalaman1 from "../../../assets/pengalaman/pengalaman1.png"
import Pengalaman2 from "../../../assets/pengalaman/pengalaman2.png"
import Pengalaman3 from "../../../assets/pengalaman/pengalaman3.png"
import Pengalaman4 from "../../../assets/pengalaman/pengalaman4.png"

export default function Card() {
    return (
        <div className="Card-Pengalaman">
            <div className="Title-pengalaman">
                <h2 className="font-bold text-3xl">Kisah Sukses Alumni OSS</h2>
                <h4>Lihat bagaimana bimbingan OSS membantu para siswa meraih kesempatan belajar di universitas impian mereka.</h4>
            </div>

            <div className="PeopleCardWrapper">
                <div className="PeopleCard">
                    <div className="CardPeople" style={{ backgroundImage: `url(${australia})` }}>
                        <div className="Container-CardPeople">
                            <h2 className="text-white text-2xl font-bold">Mutia Hapsari</h2>
                            <p className="text-white w-80 font-medium">Dari Bali ke Australia. Perjalanan penuh Perjuangan menuju Universitas impian</p>
                        </div>

                        <div className="Pengalaman1">
                            <img src={Pengalaman3} className="Image-Pengalaman" style={{ filter: "brightness(84%)" }} />
                        </div>
                    </div>

                    <div className="CardPeople" style={{ backgroundImage: `url(${perth})` }}>
                        <div className="Container-CardPeople">
                            <h2 className="text-white text-2xl font-bold">Ranggita Pramesti</h2>
                            <p className="text-white w-80 font-medium">Diterima di Curtin University, Australia dengan dukungan penuh dari OSS</p>
                        </div>

                        <div className="Pengalaman1">
                            <img src={Pengalaman4} className="Image-Pengalaman" />
                        </div>
                    </div>

                    <div className="CardPeople" style={{ backgroundImage: `url(${vu})` }}>
                        <div className="Pengalaman1">
                            <img src={Pengalaman2} className="Image-Pengalaman" />
                        </div>

                        <div className="Container1-CardPeople">
                            <h2 className="text-white text-2xl font-bold">Dwi Kade Artika</h2>
                            <p className="text-white w-80 font-medium">Berkat bantuan team OSS berhasil diterima di Victoria University(VU)</p>
                        </div>
                    </div>

                    <div className="CardPeople1" style={{ backgroundImage: `url(${ecu})` }}>
                        <div className="Pengalaman1" style={{ filter: "brightness(90%)" }}>
                            <img src={Pengalaman1} className="Image-Pengalaman" />
                        </div>

                        <div className="Container1-CardPeople">
                            <h2 className="text-white text-2xl font-bold">Made Love Wijaya</h2>
                            <p className="text-white w-80 font-medium">Berhasil kuliah di Edith Cowan University dengan bantuan penuh dari OSS</p>
                        </div>
                    </div>

                    <div className="ScrollSpacer"></div>
                </div>
            </div>
        </div>
    );
}
