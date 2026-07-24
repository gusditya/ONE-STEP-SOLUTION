import { createRoot } from "react-dom/client";
// import HelloWorld from "./pages/home/HelloWorld.jsx";
import { StrictMode } from "react";
// import Container from "./pages/home/Container.jsx";
import Navbar from "./components/layout/navbar/Navbar.jsx";
// import TodoList from "./components/ui/todolist/TodoList.jsx";
import Footer from "./components/layout/footer/Footer.jsx";
// import AlertButton from "./components/ui/button/AlertButton.jsx";
// import Toolbar from "./components/ui/button/Toolbar.jsx";
// import SearchForm from "./components/ui/form/SearchForm.jsx";
// import SayHelloForm from "./components/ui/form/SayHelloForm.jsx";
// import Counter from "./components/ui/form/Counter.jsx";
import Lanyard from "./components/ui/lanyard/lanyard.jsx";
import "./styles/index.css";
import frontImage from "./assets/lanyard/house.png";
import Image from "./assets/download.jpg";
import Title from "./pages/home/title.jsx";
import InputSearch from "./components/ui/button/InputSearch.jsx";
import Card from "./components/ui/card/Card.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <div className="app">
                <Navbar />
                {/* <Container>
                            <HelloWorld />
                            <TodoList />

                            <AlertButton text="Click Me" />
                            <Toolbar onClick={(e) => {
                                e.stopPropagation();
                                alert("you click toolbar")
                            }} />

                            <SearchForm />
                            <SayHelloForm />
                            <Counter />
                        </Container> */}
                <div className="ContainerTitle">
                    <div className="hero" style={{ backgroundImage: `url(${Image})` }}>
                        <div className="hero-left">
                            <Title />
                        </div>


                        <div className="hero-right">
                            <Lanyard
                                position={[0, 0, 20]}
                                gravity={[0, -40, 0]}
                                frontImage={frontImage}
                                backImage={frontImage}

                                imagefit="cover"
                            />
                        </div>
                    </div>

                    <InputSearch />
                </div>

                {/* <Card/> */}
                <Footer />
            </div>
        </StrictMode>
    )
