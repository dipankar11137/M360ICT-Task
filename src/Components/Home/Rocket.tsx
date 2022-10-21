import React from "react";

const Rocket = (rocket: any) => {
  console.log(rocket.rocket);
  return (
    <div className="card w-96 h-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-64 pt-3"
          src={rocket?.rocket?.links?.mission_patch}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Mission Name : {rocket?.rocket?.mission_name}
        </h2>
        <p>{rocket?.rocket?.details}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
