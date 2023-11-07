import { MOVIE_POSTER_IMG_URL } from "../utils/constant";

const BannerCard = ({ posterPath }) => {
    return (
        <div className="w-48 pr-4">
          <img alt="Movie Card" src={MOVIE_POSTER_IMG_URL + posterPath} />
        </div>
      );
}

export default BannerCard
