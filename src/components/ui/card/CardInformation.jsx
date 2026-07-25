import "./CardInformation.css";
import Avatar from "../../../assets/Logo-Avatar.jpg";
import { Landmark } from "lucide-react";
import { Globe } from "lucide-react";
import { ShieldCheck } from "lucide-react";

export default function CardInformation() {
    return (
        <div className="title-Card">
            <div className="Card1">
                <h2>37.000+</h2>
                <div className="SubCard">
                    <h3>Alumni Sukses</h3>
                    <img src={Avatar} alt="Avatar" />
                    <h3>Trust by Thousands</h3>
                </div>
            </div>

            <div className="Card2">
                <div className="icon-box">
                    <Landmark size={32} color="#2563EB " />
                </div>
                <div className="Card-text">
                    <h2>300+</h2>
                    <h3>Universitas Partner</h3>
                </div>
            </div>

            <div className="Card3">
                <div className="icon-box">
                    <Globe size={32} color="#2563EB" />
                </div>
                <div className="Card-text">
                    <h2>15+</h2>
                    <h3>Negara Tujuan</h3>
                </div>
            </div>

            <div className="Card4">
                <div className="icon-box">
                    <ShieldCheck size={32} color="#2563EB" />
                </div>
                <div className="Card-text">
                    <h2>98%</h2>
                    <h3>Visa Success Rate</h3>
                </div>
            </div>


        </div>
    )
}
