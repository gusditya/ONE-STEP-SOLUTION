import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
import Lanyard from "./components/ui/lanyard/lanyard.jsx";
import "./styles/index.css";
import frontImage from "./assets/lanyard/Logo.png";
import Image from "./assets/download.jpg";
import Title from "./pages/home/title.jsx";
import InputSearch from "./components/ui/button/InputSearch.jsx";
import CardInformation from "./components/ui/card/CardInformation.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <div className="app">
                <Navbar />
                <div className="ContainerTitle">
                    <div className="hero">
                        <div className="hero-left">
                            <Title />
                            <img src={Image} alt="Hero" width={200} height={200} className="hero-image" />
                        </div>

                        {/* <div className="hero-right">
                            <Lanyard
                                position={[0, 0, 20]}
                                gravity={[0, -40, 0]}
                                frontImage={frontImage}
                                backImage={frontImage}
                                lanyardWidth={2}
                                imagefit="cover"
                            />
                        </div> */}
                        <CardInformation />
                    </div>

                    <InputSearch />
                </div>

                {/* <Card/> */}
                <Footer />
            </div>
        </StrictMode>
    )
