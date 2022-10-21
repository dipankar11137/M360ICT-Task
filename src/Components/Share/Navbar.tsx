import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-indigo-300">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default Navbar;
