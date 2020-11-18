import React from "react";
import "./Detail.css";
import { withCookies, Cookies } from "react-cookie";
let currentUrl = [];
class Detail extends React.Component {
  constructor(props) {
    super();
    const { cookies } = props;
    currentUrl.push(cookies.get("currentUrl"));

    // if (cookies.get(`click_good ${props.location.state}`) === undefined)
    //   props.history.push("/");
    // else
    this.state = {
      click_good: cookies.get(`click_good ${props.location.state.id}`) || "0",
    };
  }

  componentDidUpdate() {}
  add_click = () => {
    const { cookies } = this.props;
    currentUrl.push(window.location.href);

    cookies.set(
      `click_good ${this.props.location.state.id}`,
      (this.state.click_good * 1 + 1).toString(),
      {
        path: "/",
      }
    );
    cookies.set(currentUrl);
    // this.setState((current) => ({ click_good: current.click_good + 1 }));
    this.setState((state, props) => {
      // console.log(cookies.get("click_good"));
      //  console.log(props);
      if (!currentUrl.includes(window.location.href))
        state.click_good = state.click_good * 1 + 1;
      return cookies.get(`click_good ${props.location.state.id}`);
      // state.click_good = props.location.state.click_good;
    });
  };
  render() {
    // console.log(this.props.location.state);
    const { cookies } = this.props;
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/"); //redirection
      return <h1>going back</h1>;
    } else {
      const { location } = this.props;
      const {
        title,
        summary,
        rating,
        poster,
        genre,
        year,
        id,
        // click_good,
      } = location.state;
      // console.log({ poster });
      var bgImage = {
        //to declare image inside of react tag
        height: "600px",
        backgroundImage: `url(${poster})`,
        backgroundRepeat: "no-repeat",
      };
      return (
        <div className="d_whole_ctrl" style={bgImage}>
          <img src={poster} alt={title} title={title} className="d_img_ctrl" />
          <div>
            <h1 className="d_title">{title}</h1>
          </div>
          <div className="d_genre">{genre}</div>
          <div className="d_year">{year}</div>
          <div className="d_rating">{rating}</div>
          <div className="d_summary">{summary}</div>
          <button className="d_click_good" onClick={this.add_click}>
            👍{cookies.get(`click_good ${id}`)}
          </button>
        </div>
      );
    }
  }
}

export default withCookies(Detail);
