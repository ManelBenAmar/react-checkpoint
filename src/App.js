import "./App.css";
import React from "react";
import NavBar from "./Components/navBar/navBar";
import MyForm from "./Components/MyForm/MyForm";
import MyCarousel from "./Components/Carousel/Carousel";

function App() {
    return (
        <div className="App">
            <NavBar />
            <MyCarousel />
            <h1> Welcome to Tunisia ! </h1>
            <MyForm />
            <br />
            <footer> React Js Checkpoint made by Manel BEN AMAR</footer>
        </div>
    );
}

export default App;
