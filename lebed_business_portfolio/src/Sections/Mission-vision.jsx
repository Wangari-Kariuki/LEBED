import React from "react";
import "../Styles/body.css";
import "../Styles/mission-media.css";
import about_image from "../images/mission.jpg";

export default function MissionVision() {
  return (
    <div className="mission-vision-container flex flex-col items-center gap-6 px-4 py-8 sm:px-10 sm:py-12">
      {/* Mission Section */}
      <div className="mission_vision flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-12 w-full max-w-6xl">
        <img
          src={about_image}
          alt="mission.jpg"
          className="w-[90%] sm:w-[300px] h-auto p-2 rounded-[7%]"
        />
        <div className="mission_vision-text text-center sm:text-left">
          <p className="text-lg sm:text-xl leading-relaxed">
            Our vision is to be a leading home-based care provider, recognized
            for our commitment to excellence and innovation. We strive to create
            a world where every individual receives the support they need to
            live fulfilling, independent lives at home. By fostering a culture
            of empathy and respect, we aim to empower our clients and their
            families, ensuring that care is accessible, personalized, and
            aligned with their values and aspirations. We aspire to be a trusted
            partner in promoting health, happiness, and dignity.
          </p>
        </div>
        <img
          src={about_image}
          alt="mission.jpg"
          className="w-[80%] sm:w-[250px] h-auto p-2 rounded-[10%]"
        />
      </div>

      {/* Objectives Section */}
      <div className="objectives-col w-full max-w-4xl flex flex-col items-center gap-4">
        <ul className="flex flex-col sm:flex-row justify-around w-full text-center gap-4">
          <li>
            <p className="text-lg sm:text-xl">
              at least <span className="font-bold">125+</span>
            </p>
          </li>
          <li>
            <p className="text-lg sm:text-xl">
              <span className="font-bold">75%</span> client satisfaction
            </p>
          </li>
          <li>
            <p className="text-lg sm:text-xl">
              Profitability within <span className="font-bold">1.5 years</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
