import React, { useState, useEffect } from "react";
import "./TinderCard.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

const TinderCards = () => {
  // here we are installing the react tinder card to make a tindercard:
  // npm i react-tinder-card
  // npm i axios
  // axios make http request
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/card");
      setPeople(await req.data);
    }
    fetchData();
  }, []);
  console.log(people);

  const swiped = (direction, nametoDelete) => {
    console.log("removing" + nametoDelete);
    // setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  };
  return (
    <>
      <div className="tinderCard">
        <div className="tinderCards_cardContainer">
          {people.map((person) => (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: ` url(${person.imgUrl})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default TinderCards;
