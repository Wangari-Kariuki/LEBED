import React, { useState, useEffect } from "react";
import InfoCard from "./Info"; // Assuming this is your card component
import data from "./Data"; // Renamed the imported Info array to `data` for clarity
import next_btn from "../../images/arrow-forward.png";
import back_btn from "../../images/arrow-backward.png";
import Info from "./Data";
function Main() {
  const [index, setIndex] = useState(0);

  // Ensure index stays within bounds
  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, data]);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider); // Cleanup on component unmount
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>Reviews</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {Info.map((info, infoIndex) => {
          // Calculate the slide class
          let position = "nextSlide";
          if (infoIndex === index) {
            position = "activeSlide";
          }
          if (
            infoIndex === index - 1 ||
            (index === 0 && infoIndex === data.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <InfoCard
            key={info.id} // Corrected typo
            id={info.id} // Pass the id prop
            title={info.title} // Pass the title prop
            description={info.description} // Pass the description prop
            index={index} // Pass the current index
            infoIndex={infoIndex} // Pass the index of the current card being rendered
            className={position} // Pass the calculated class name
        />
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <img src={back_btn} alt="Previous" className="btn-icon" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <img src={next_btn} alt="Next" className="btn-icon" />
        </button>
      </div>
    </section>
  );
}

export default Main;
