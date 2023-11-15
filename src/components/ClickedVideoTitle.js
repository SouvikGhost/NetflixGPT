import { FaStar } from "react-icons/fa";

const ClickedVideoTitle = ({original_title,overview,original_language,popularity,release_date,runtime,}) => {



  const totalminutes=runtime;
  const totalHour=Math.floor(totalminutes/60) ;
  const second=(totalminutes/60).toFixed(2);
  const totalsecond=second.slice(2,4)





  return (
    <div className="">
      <h1 className="text-5xl font-serif text-center pt-4">{original_title} </h1>
      <p className="text-center pt-7 text-lg">{overview}</p>
      <div className="flex justify-between w-2/4 mx-auto pt-12 text-xl">
        <div>
          <p>Release Date : &nbsp;{release_date}</p>
          <p className="pt-5">Runtime : &nbsp;{`${totalHour}hr ${totalsecond}minutes`}</p>
        </div>
        <div className="border-l-2"></div>
        <div>
          <p>Original Language :&nbsp; {original_language}</p>
          <p className="">
            Popularity : &nbsp;
            <span className="inline-block">
              <FaStar className="text-yellow-400" />
            </span>
            &nbsp;
            <span className="inline-block pt-5">{popularity}</span>
          </p>
        </div>
      </div>
      <div className="w-2/4 flex items-center mx-auto pt-6">
      <button className="bg-red-600 p-3 m-3 rounded-lg text-white mx-auto cursor-pointer hover:bg-opacity-80 ">Watch Now</button>
      <button className="bg-gray-600 p-3 m-3 rounded-lg text-white mx-auto cursor-pointer hover:bg-opacity-80 ">Add to Watchlist</button>

      </div>
    </div>
  );
};

export default ClickedVideoTitle;
