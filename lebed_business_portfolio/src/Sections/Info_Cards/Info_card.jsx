import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import './info_cards.css';

function Cards_Carousel() {
  const cards = [
    <div
      key={1}
      className="mx-auto w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#aca9bb] text-[#0d0d31] p-4 shadow-md rounded-md text-center h-auto sm:h-[150px] md:h-[180px] lg:h-[200px] text-sm sm:text-xs md:text-base lg:text-[20px]"
    >
      <h2 className="text-base sm:text-sm md:text-lg lg:text-xl font-semibold text-[#300000]">
        Compassion and Patient-Centered Care
      </h2>
      <p className="text-xs sm:text-[10px] md:text-sm lg:text-base">
        We prioritize the dignity, comfort, and well-being of every patient, ensuring they feel heard, valued, and respected.
      </p>
    </div>,

    <div
      key={2}
      className="mx-auto w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#aca9bb] text-[#0d0d31] p-4 shadow-md rounded-md text-center h-auto sm:h-[150px] md:h-[180px] lg:h-[200px] text-sm sm:text-xs md:text-base lg:text-lg"
    >
      <h2 className="text-[#300000] text-base sm:text-sm md:text-lg lg:text-xl font-semibold">
        Integrity and Transparency
      </h2>
      <p className="text-xs sm:text-[10px] md:text-sm lg:text-base">
        We uphold the highest ethical standards, fostering trust through honesty and accountability in everything we do.
      </p>
    </div>,

    <div
      key={3}
      className="mx-auto w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#aca9bb] text-[#0d0d31] p-4 shadow-md rounded-md text-center h-auto sm:h-[150px] md:h-[180px] lg:h-[200px] text-sm sm:text-xs md:text-base lg:text-lg"
    >
      <h2 className="text-[#300000] text-base sm:text-sm md:text-lg lg:text-xl font-semibold">
        Innovation and Excellence
      </h2>
      <p className="text-xs sm:text-[10px] md:text-sm lg:text-base">
        We continuously seek groundbreaking solutions and embrace cutting-edge technologies to improve healthcare outcomes.
      </p>
    </div>,

    <div
      key={4}
      className="mx-auto w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#aca9bb] text-[#0d0d31] p-4 shadow-md rounded-md text-center h-auto sm:h-[150px] md:h-[180px] lg:h-[200px] text-sm sm:text-xs md:text-base lg:text-lg"
    >
      <h2 className="text-[#300000] text-base sm:text-sm md:text-lg lg:text-xl font-semibold">
        Collaboration and Teamwork
      </h2>
      <p className="text-xs sm:text-[10px] md:text-sm lg:text-base">
        We believe in the power of collaboration, working with healthcare professionals, researchers, and communities to deliver exceptional care.
      </p>
    </div>,

    <div
      key={5}
      className="mx-auto w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 bg-[#aca9bb] text-[#0d0d31] p-4 shadow-md rounded-md text-center h-auto sm:h-[150px] md:h-[180px] lg:h-[200px] text-sm sm:text-xs md:text-base lg:text-lg"
    >
      <h2 className="text-[#300000] text-base sm:text-sm md:text-lg lg:text-xl font-semibold">
        Commitment to Quality
      </h2>
      <p className="text-xs sm:text-[10px] md:text-sm lg:text-base">
        We are dedicated to providing safe, effective, and evidence-based medical services, ensuring the highest level of care for our patients.
      </p>
    </div>,
  ];

  return (
    <div id="values">
      <AliceCarousel
        items={cards}
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        mouseTracking
        className="custom_carousel"
      />
    </div>
  );
}

export default Cards_Carousel;
