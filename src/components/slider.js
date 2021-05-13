import React, { useContext, useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Provider } from '../context';



function Slider(props) {
    const { modal } = useContext(Provider);
    const [index, setIndex] = useState(0)
    const position = modal ? "remove-slider" : "slider-container";
    const reviews = [
        {
            name: "Lisa Moore",
            testimony: "\"KETOLY allows me to save time as a working professional\".",
            title: "Business owner",
            img: "/professional2.png"
        },
        {
            name: "Jennifer Beck",
            testimony: "\"KETOLY allows me to have more time with my family.\" ",
            title: "Busy mom",
            img: "/mom2.png"
        },
        {
            name: "Katie Johnson",
            testimony: "\"KETOLY gives me the strength to push through hard workouts!\" ",
            title: "Endurance althelte",
            img: "/athlete2.png"
        },
        {
            name: "Glenn Smoke",
            testimony: "\"KETOLY gives me the energy I need during the most stressful events!\" ",
            title: "Fire fighter",
            img: "/fireman2.png"
        },
    ]

    const handleIncrement = () => {
        console.log("count increased");
        if (index !== reviews.length - 1) setIndex(e => e + 1);

    }
    const handleDecrement = () => {
        console.log("count decreased");
        if (index !== 0) setIndex(e => e - 1);

    }

    useEffect(() => {
        const auto = setInterval(() => {
            if (index !== reviews.length - 1) setIndex(e => e + 1);
            if (index === reviews.length - 1) setIndex(0);

        }, 3000)

        return () => clearInterval(auto);
    }, [index])
    return console.log(index + ' value') || (
        <section className={position}>
            <h2>Reviews</h2>
            <div className="reviews-wrapper">
                <div onClick={handleDecrement}>
                    <AiOutlineArrowLeft />
                </div>
                <div className="reviews-container">
                    {reviews.map((person, personIndex) => {
                        let position = "next-position";
                        if (personIndex === index) position = "current-position";
                        if (personIndex === index - 1 && index !== 0) position = "prev-position";
                        return (
                            <article key={person.name} className={position}>
                                <div className="slide">
                                    <img className="slider-img" style={{
                                        width: 200,
                                        height: 200,
                                        borderRadius: 100,
                                    }} src={person.img} alt="" />
                                    <h3>{person.name}</h3>
                                    <p>{person.testimony}</p>
                                    <strong>{person.title}</strong>
                                </div>
                            </article>
                        )
                    })}
                </div>
                <div onClick={handleIncrement}>
                    <AiOutlineArrowRight />
                </div>
            </div>

        </section>
    );
}

export default Slider;