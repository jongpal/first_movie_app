import React from "react";
import axios from "axios";
//import Proptypes from "prop-types";
import Movie from "../components/Movie";
import "./Home.css";

const URL ="https://yts-proxy.now.sh/list_movies.json?sort_by=rating";
class Home extends React.Component{
  state = {
    isLoad: true,
    movie: []
  };
  /*add = () => {
    this.setState(current => ({
      count : current.count + 1
    }))  //curly bracket 안의 것이 리턴값, 그냥 괄호 안의 값은 함수내용.
  };
  minus = () => {
    this.setState(current => ({
      count : current.count - 1
    }))
  } */
  getMovies = async() => {
    const {data:{data :{movies}}} = await axios.get(URL);
    console.log(movies);
    this.setState({movie : movies, isLoad : false});
    //const movie_title = movies.map((title) => title.title);
    
    
  }
  componentDidMount(){
    //setTimeout(() => {this.setState({isLoad : false})}, 6000);
    //console.log("mounted");
    this.getMovies();
  }
  componentDidUpdate(){ 
    
  }
  componentWillUnmount(){
     
  }
  render(){
    
    const {isLoad, movie} = this.state;  // it means get me isLoading from this.state
    
    
    return <div>{isLoad ? <div className="isLoading">"Loading..."</div> : 
    <div className="whole_ctrl">
      {
        movie.map(movie => {
          return (
            <div className="whole2_ctrl" key={movie.id}>
            <Movie title={movie.title} id={movie.id} rating={movie.rating} year={movie.year}
             summary={movie.summary} genre={movie.genres.map((genre,index) => genre+" ")}
              poster={movie.medium_cover_image}/>
            </div>
          )
         })
      }
    </div>
    }</div>;
  }
}

export default Home;