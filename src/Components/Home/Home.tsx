import Rockets from "./Rockets";

const Home = () => {
  return (
    <div>
      <h1 className=" text-3xl">Home</h1>
      <Rockets />
      <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
      </button>
    </div>
  );
};

export default Home;
