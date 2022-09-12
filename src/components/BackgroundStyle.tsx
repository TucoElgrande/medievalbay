import React from "react";
import imageVillage from "../assets/img/village.png";
import imageVikings from "../assets/img/vikings.jpg";

function BackgroundStyle() {
    return (
        <div className="page-background">
            <img src={imageVillage} className="bg-image1" />
            <img src={imageVillage} className="bg-image2" />
            <div className="page-content-bg"></div>
        </div>
    );
}

export default BackgroundStyle;
