import React, { useRef, useState, useEffect } from 'react';
import arrow_forward from '../images/arrow-forward.png';
import arrow_back from '../images/arrow-backward.png';
import '../Styles/info_card.css';
import icon1 from '../images/icon1.jpeg';
import icon2 from '../images/icon2.jpeg';
import icon3 from '../images/icon3.jpeg';

export default function Info_card() {
    const slider = useRef(null);
    const [info, setInfo] = useState(data);
    const [index, setIndex] = useState(0);

    // Update totalSlides after the slider is rendered
    useEffect(() => {
        if (slider.current) {
            const slidesCount = slider.current.children.length;
            setTotalSlides(slidesCount);
            console.log("Total Slides:", slidesCount); // Debugging line
        }
    }, []);

    // Logic for the forward button
    const slideForward = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % totalSlides;
            console.log("Current Index after forward:", newIndex); // Debugging line
            return newIndex;
        });
    };
    // Logic for the backward button
    const slideBackward = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : totalSlides - 1
        );
    };

    return (
        <div className='infos'>
            <img
                src={arrow_back}
                alt='Slide Backward'
                onClick={slideBackward}
                className='back-btn'
            />
            <div className='info-card-slider'>
                <ul
                    ref={slider}
                    style={{
                
                        transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                    }}
                    className="flex transition-transform"
                >
                    <li>
                        <div className='info-slide'>
                            <div className="text-center p-2 text-[#ff5100]">
                                <h1>Compassion and Patient-Centered Care</h1>
                            </div>
                            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                                <p className="text-lg font-medium text-center">
                                    We prioritize the dignity, comfort,
                                    and well-being of every patient, ensuring they feel heard,
                                    valued, and respected.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='info-slide'>
                            <div className='info-card-header'>
                                <h1>Integrity and Transparency</h1>
                            </div>
                            <div className='info-card-body'>
                                <p>
                                    We uphold the highest ethical standards,
                                    fostering trust through honesty and accountability in
                                    everything we do.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='info-slide'>
                            <div className='info-card-header'>
                                <h1>Innovation and Excellence</h1>
                            </div>
                            <div className='info-card-body'>
                                <p>
                                    We continuously seek groundbreaking solutions and embrace
                                    cutting-edge technologies to improve healthcare outcomes.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='info-slide'>
                            <div className='info-card-header'>
                                <h1>Collaboration and Teamwork</h1>
                            </div>
                            <div className='info-card-body'>
                                <p>
                                    We believe in the power of collaboration,
                                    working with healthcare professionals, researchers,
                                    and communities to deliver exceptional care.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='info-slide'>
                            <div className='info-card-header'>
                                <h1>Commitment to Quality</h1>
                            </div>
                            <div className='info-card-body'>
                                <p>
                                    We are dedicated to providing safe, effective,
                                    and evidence-based medical services,
                                    ensuring the highest level of care for our patients.
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <img
                src={arrow_forward}
                alt='Slide Forward'
                onClick={slideForward}
                className='next-btn'
            />
        </div>
    );
}
