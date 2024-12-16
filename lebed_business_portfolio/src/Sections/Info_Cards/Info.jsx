import React from "react";
import Info from "./Data";


const InfoCard = () => ({id, title, description, index, infoIndex}) => {
    let position = "nextSlide";
    if (infoIndex === index) {
        position = "activeSlide";
    }
    if (infoIndex === index - 1 || (index === 0 && infoIndex === Info.length - 1)){
        position = 'lastSlide'
    }

    return (
       <article className = {position} key={id}>
        <h4>{title}</h4>
        <p>{description}</p>

       </article>
    )
}
export default InfoCard;