import React, { useEffect, useState } from "react";
import Rocket from "./Rocket";

const Rockets = () => {
  const [rockets, setRockets] = useState<any[]>([]);
  useEffect(() => {
    console.log("hello");
    fetch("https://api.spacexdata.com/v3/launches")
      .then((res) => res.json())
      .then((data) => setRockets(data));
  }, []);
  console.log(rockets);

  return (
    <div>
      <h1>Rockets {rockets.length}</h1>

      {rockets.map((rocket) => (
        <Rocket rocket={rocket}></Rocket>
      ))}
    </div>
  );
};

export default Rockets;
