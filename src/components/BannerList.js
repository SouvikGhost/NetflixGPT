import BannerCard from "./BannerCard";
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from "react-router-dom";


const BannerList = ({ title, movies }) => {
  // const movieId =useParams()


  const sliderLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 50;
    // console.log("left clicked");
  }

  const sliderRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 50;
    // console.log("right clicked");

  }
  // console.log(movies);
 
    return (
      <div className="">
        <h1 className=" text-white py-4 text-xl md:text-3xl font-medium">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth">
        
          <div className="flex " id="slider">
              <IoIosArrowBack onClick={sliderLeft}  className="mt-20 md:mt-28 text-2xl md:text-4xl bg-gray-400 bg-opacity-40 cursor-pointer"/> 
            
            {movies?.map((movie) => (
              <Link  key={movie.id} to={`/${movie.id}`}>
                <BannerCard posterPath={movie.poster_path}/>
                </Link>
                
                ))}
                <IoIosArrowForward onClick={sliderRight} className="mt-20 md:mt-28 text-2xl md:text-4xl absolute right-10 bg-gray-400 bg-opacity-40 cursor-pointer"/>
          </div>
        
        </div>
      </div>
    );
}

export default BannerList
