import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Movie-view.css";

export const MovieView = ({ Movies }) => {
  const { MovieId } = useParams();

  const Movie = Movies.find((b) => b.id === MovieId);

  return (
    <div>
      <div>
        <img className="w-100" src={Movie.image} />
      </div>
      <div>
        <span>Title: </span>
        <span>{Movie.title}</span>
      </div>
      <div>
        <span>Author: </span>
        <span>{Movie.author}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
  );
};