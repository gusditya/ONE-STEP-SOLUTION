import "./CardInformation.css";
import Canada from "../../../assets/country/canadaflag.png";
import UK from "../../../assets/country/UKflag.png";
import Australia from "../../../assets/country/australiaflag.png";
import Singapore from "../../../assets/country/singaporeflag.png";

export default function CardInformation() {
    return (
        <div className="CardInformation">
            <div className="Canada">
                <div className="countryflag">
                    <img src={Canada} className="country" />
                </div>

                <div className="TextCountry">
                    <h4 className="font-bold text-lg">Canada</h4>
                    <h5>Toronto</h5>
                </div>
            </div>

            <div className="United-Kingdom">
                <div className="countryflag">
                    <img src={UK} className="country" />
                </div>

                <div className="TextCountry">
                    <h4 className="font-bold text-lg">UK</h4>
                    <h5>London</h5>
                </div>
            </div>

            <div className="Australia">
                <div className="countryflag">
                    <img src={Australia} className="country" />
                </div>

                <div className="TextCountry">
                    <h4 className="font-bold text-lg">Australia</h4>
                    <h5>Sydney</h5>
                </div>
            </div>

            <div className="Singapore">
                <div className="countryflag">
                    <img src={Singapore} className="country" />
                </div>

                <div className="TextCountry">
                    <h4 className="font-bold text-lg">Singapura</h4>
                    <h5>Woodland</h5>
                </div>
            </div>
        </div>
    )
}
