import BannerCard from "./BannerCard";

const BannerList = ({ title, movies }) => {
    return (
      <div className="">
        <h1 className=" text-white py-4 text-3xl font-medium">{title}</h1>
        <div className="flex overflow-x-scroll scrollbar-hide">
          <div className="flex">
            {movies?.map((movie) => (
                <BannerCard key={movie.id} posterPath={movie.poster_path}/>
            ))}
          </div>
        </div>
      </div>
    );
}

export default BannerList
