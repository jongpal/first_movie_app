import React from "react";
import axios from "axios";
//import Proptypes from "prop-types";
import Movie from "../components/Movie";
import "./Home.css";
import { withCookies } from "react-cookie";

const URL = "https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
class Home extends React.Component {
  state = {
    isLoad: true,
    movie: [],
    click_good: 0,
  };
  constructor(props) {
    super();
  }
  minus = () => {
    this.setState((current) => ({
      count: current.count - 1,
    }));
  };
  getMovies = async () => {
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
  componentDidUpdate() {}
  componentWillUnmount() {}
  render() {
    const { isLoad, movie } = this.state;
    const { cookies } = this.props;
    return (
      <div>
        {isLoad ? (
          <div className="isLoading">"Loading..."</div>
        ) : (
          <div className="whole_ctrl">
            {movie.map((movie) => {
              return (
                <div className="whole2_ctrl" key={movie.id}>
                  <Movie
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

export default withCookies(Home);
