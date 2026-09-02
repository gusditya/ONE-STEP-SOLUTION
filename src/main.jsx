import { createRoot } from "react-dom/client";
import { StrictMode, useState } from "react";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Lanyard from "./components/ui/lanyard/lanyard.jsx";
import "./styles/index.css";
import frontImage from "./assets/lanyard/Logo.png";
import Image from "./assets/download.jpg";
import Title from "./pages/home/title.jsx";
import InputSearch from "./components/ui/button/InputSearch.jsx";
import CardInformation from "./components/ui/card/CardInformation.jsx";
import Tatacara from "./pages/home/Tatacara.jsx";
import CardCountry from "./components/ui/card/CardCountry.jsx";
import Video from "./components/ui/video/video.jsx";
import Layanankami from "./components/ui/card/Layanankami.jsx";
import Card from "./components/ui/card/Card.jsx";
import Question from "./components/ui/question/question.jsx";
import CardPeople from "./components/ui/card/CardPeople.jsx";
import Weather from "./components/ui/form/weather.jsx";
import UserLogin from "./components/ui/form/UserLogin.jsx";

function App() {
    const [user, setUser] = useState(null);

    if (!user) {
        return <UserLogin onLoginSuccess={(userData) => setUser(userData)} />;
    }

    return (
        <div className="app">
            <Navbar />
            <div className="ContainerTitle">
                <div className="hero">
                    <div className="hero-left">
                        <Title />
                        <img src={Image} alt="Hero" width={200} height={200} className="hero-image" />
                    </div>

                    <CardInformation />
                </div>

                <InputSearch />
            </div>

            <Tatacara />

            <div className="flex flex-col gap-10">
                <CardCountry />
                <Video />
            </div>

            <div className="bg-gray-50">
                <Layanankami />
                <Card />
                <Question />
            </div>
            <CardPeople />
            {/* <Weather /> */}

            <Footer />
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
