import React from "react";
import { Carousel } from "react-bootstrap";
import tunis1 from "./tunis-106951_1920.jpg";
import tunis2 from "./tunisia-81258_1920.jpg";
import tunis3 from "./tunisia-2471197_1920.jpg";
import "./Carousel.css";

function MyCarousel() {
    return (
        <Carousel id="carouselMain">
            <Carousel.Item>
                <img className="d-block w-100" src={tunis1} alt="First slide" />
                <Carousel.Caption>
                    <h3>TUNISIA</h3>
                    <p>A wonderful journey !</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tunis2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>TUNISIA</h3>
                    <p>A wonderful journey ! </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={tunis3} alt="Third slide" />

                <Carousel.Caption>
                    <h3>TUNISIA</h3>
                    <p>A wonderful journey !</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;
