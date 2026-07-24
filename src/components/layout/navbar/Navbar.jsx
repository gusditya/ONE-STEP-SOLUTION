import './Navbar.css';
import Logo from '../../../assets/Logo.png';

export default function Navbar() {
    return (
        <div className="Navbar">
            <img src={Logo} className="Image" />

            <ul className="Nav1">
                <li className="li1"><a href="#" className="a1">Home</a></li>
                <li className="li2"><a href="#" className="a2">Buy</a></li>
                <li className="li3"><a href="#" className="a3">Rent</a></li>
                <li className="li4"><a href="#" className="a4">Sell</a></li>
                <li className="li5"><a href="#" className="a5">Agents</a></li>
            </ul>

            <ul className="Nav2">
                <li><a href="#" className="SignIn">Sign In</a></li>
                <li className="Start"><a href="#" className="a_start">Get Started</a></li>
            </ul>
        </div>
    )
}
