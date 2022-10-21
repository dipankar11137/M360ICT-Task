import React from "react";

interface Props {
  rocket: any;
}

const Rocket = (rocket: any) => {
  console.log(rocket.rocket);
  return (
    <div>
      <h1>Hii Mamu !!! {rocket.rocket.details}</h1>
      <img src={rocket.rocket.links.mission_patch} alt="" />
    </div>
  );
};

export default Rocket;
