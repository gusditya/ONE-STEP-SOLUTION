import { createRoot } from "react-dom/client";
import { StrictMode, useState, useEffect } from "react";
import { supabase } from "./components/ui/form/supabaseClient.js";
import Navbar from "./components/layout/navbar/Navbar.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
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
import UserLogin from "./components/ui/form/UserLogin.jsx";
import "./styles/index.css";
import Image from "./assets/download.jpg";
import BackgroundImage from "./assets/background/background_alumni.png";
function App() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                setUser(session.user);
            } else {
                const localUser = localStorage.getItem('user_session');
                if (localUser) {
                    try {
                        setUser(JSON.parse(localUser));
                    } catch (e) {
                        localStorage.removeItem('user_session');
                    }
                }
            }
            setLoading(false);
        });

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUser(session.user);
            } else {
                const localUser = localStorage.getItem('user_session');
                if (!localUser) {
                    setUser(null);
                }
            }
            setLoading(false);
        });

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    // Fungsi Logout untuk membersihkan kedua jenis session
    const handleLogout = async () => {
        setLoading(true);
        localStorage.removeItem('user_session'); // Hapus session login manual
        await supabase.auth.signOut();            // Hapus session Google OAuth
        setUser(null);
        setLoading(false);
    };

    if (loading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <p>Memuat...</p>
            </div>
        );
    }

    // Jika belum login, tampilkan halaman Login
    if (!user) {
        return <UserLogin onLoginSuccess={(userData) => setUser(userData)} />;
    }

    return (
        <div className="app">
            <Navbar user={user} onLogout={handleLogout} className="fixed"/>
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

            <div>
                <Layanankami />

                <div className="relative w-full overflow-hidden py-10">
                    <img src={BackgroundImage} alt="Background" className="absolute inset-0 object-cover z-0" />
                    <div className="relative z-10 mx-auto">
                        <Card className="bg-transparent border-none shadow-none" />
                    </div>
                </div>

                <Question />
            </div>

            <CardPeople />
            <Footer />
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
