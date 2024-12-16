import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './info_cards.css'

function Cards_Carousel(){
    <style>
        
    </style>
    const handleDragStart = (e) => e.preventDefault();


const cards= [

        <div key = {1} className="Card">
            <h2>Compassion and Patient-Centered Care </h2>
            <p>We prioritize the dignity, comfort, and well-being of every patient, ensuring they feel heard, valued, and respected.</p>
        </div>,

<div key={2} className="Card">
<h2>Integrity and Transparency </h2>
<p>We uphold the highest ethical standards, fostering trust through honesty and accountability in everything we do.</p>
</div>,

<div key={3} className="Card">
<h2> Innovation and Excellence  </h2>
<p>We continuously seek groundbreaking solutions and embrace cutting-edge technologies to improve healthcare outcomes.</p>
</div>,
  
<div key={4} className="Card">
<h2>  Collaboration and Teamwork</h2>
<p>We believe in the power of collaboration, working with healthcare professionals, researchers, and communities to deliver exceptional care.</p>
</div>,


<div key={5} className="Card">
<h2>  Commitment to Quality </h2>
<p>We are dedicated to providing safe, effective, and evidence-based medical services, ensuring the highest level of care for our patients</p>
</div>,
    ];

  
return (<AliceCarousel 
items = {cards}
autoPlay
autoPlayInterval={3000}
infinite
disableButtonsControls
mouseTracking
className = "custom_carousel"
/>
);
};


export default Cards_Carousel;