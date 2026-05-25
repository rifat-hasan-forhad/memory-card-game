import coverImage from "/front-img.png";

const FrontPage = ({ onClickHandle }) => {
  const click = false;

  const handleClick = () => {
    onClickHandle(!click);
  };

  return (
    <div className="h-screen bg-primary p-10 flex flex-col items-center justify-center sm:flex-row sm:space-x-2 sm:my-auto lg:p-28 ">
      <img
        src={coverImage}
        alt="logo"
        className="w-sm rounded-lg sm:w-1/2 lg:w-6/10"
      />

      <div className="mt-5 flex flex-col sm:w-1/2 md:text-right lg:4/10">
        <h1 className="text-3xl text-white p-1 font-bold sm:whitespace-nowrap md:text-4xl ">
          MEMORY CARD GAME
        </h1>
        <button
          className="w-4/10 ml-auto bg-linear-to-r from-blue-400 to-purple-400 text-white font-semibold px-4 py-1.5 mt-3 rounded-lg cursor-pointer "
          onClick={handleClick}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};

export default FrontPage;
