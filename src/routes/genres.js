import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import { withCookies } from "react-cookie";
import "./Genre.css";
let URL = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";

class Genres extends React.Component {
  state = {
    isLoad: true,
    movie: [],
    click_good: 0,
  };
  constructor(props) {
    super();
  }
  getMovies = async () => {
    URL = URL + `&genre=${this.props.match.params.genre}`;
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(URL);
    this.setState({ movie: movies, isLoad: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoad, movie } = this.state;
    const { cookies } = this.props;
    return (
      <div>
        {isLoad ? (
          "Loading..."
        ) : (
          <div className="g_movie_container">
            {movie.map((movie, ind) => {
              return (
                <div className="g_movie2_container">
                  <Movie
                    key={ind}
                    title={movie.title}
                    id={movie.id}
                    rating={movie.rating}
                    year={movie.year}
                    summary={movie.summary}
                    genre={movie.genres.map((genre, index) => genre + " ")}
                    poster={movie.medium_cover_image}
                    click_good={
                      cookies.get(`click_good ${movie.id}`)
                        ? cookies.get(`click_good ${movie.id}`)
                        : 0
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default withCookies(Genres);
