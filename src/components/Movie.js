import React from "react";
import Proptypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({
  id,
  title,
  year,
  rating,
  summary,
  poster,
  genre,
  click_good,
}) {
  return (
    <Link
      to={{
        pathname: `movie/${id}`,
        state: { id, title, year, rating, summary, poster, genre, click_good },
      }}
      className="link_design"
    >
      <div>
        <img className="img_ctrl" src={poster} alt={title} title={title} />
        <h2 className="title">{title}</h2>
        <div className="genre">{genre}</div>
        <div className="year">{year}</div>
        <div className="ration">{rating}/10.0</div>
        <button className="click_good">👍{click_good}</button>
        <p className="summary">{summary.slice(0, 150)}</p>
      </div>
    </Link>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  rating: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  genre: Proptypes.arrayOf(Proptypes.string).isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
};

export default Movie;
