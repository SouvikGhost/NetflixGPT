import { MOVIE_POSTER_IMG_URL } from "../utils/constant";

const BannerCard = ({ posterPath }) => {
  if(!posterPath) return null;
    return (
        <div className="w-36 md:w-48 pr-4 cursor-pointer ">
          <img alt="Movie Card" src={MOVIE_POSTER_IMG_URL + posterPath} />
        </div>
      );
}

export default BannerCard
