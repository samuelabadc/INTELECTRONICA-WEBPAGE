import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import HortiImg from "../assets/img/7.jpg";
// import InstElec from "../assets/img/INST_ELEC.jpg"
function Cards() {
  return (
    <div className="cards">
      <h1>Our solutions</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={HortiImg}
              text="Horticulture"
              label="Grow"
              path="/services"
            />
            <CardItem
              src={HortiImg}
              text="Travel through the Islands of Bali in a Private Cruise"
              label=""
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
