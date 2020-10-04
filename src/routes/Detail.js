
import React from "react";
import "./Detail.css";



class Detail extends React.Component {
    
    render(){
        
        const { location, history } = this.props;
        if(location.state === undefined)
        {
            history.push('/');
            return <h1>going back</h1>
        }    
        else
        {
            const {location} = this.props;
            const {title, summary, rating, 
                poster, genre, year} = location.state;
            console.log({poster});
            var bgImage = {  //to declare image inside of react tag
                height:"600px",
                backgroundImage: `url(${poster})`,
                backgroundRepeat: 'no-repeat',
            }
            return (
            <div className="d_whole_ctrl" style={bgImage}>
                <img src={poster} alt={title}
                title={title} className="d_img_ctrl"/>
                <div><h1 className="d_title">{title}</h1></div>
                <div className="d_genre">{genre}</div>
                <div className="d_year">{year}</div>
                <div className="d_rating">{rating}</div>
                <div className="d_summary">{summary}</div>
            </div>);
        }
           
    }
}



export default Detail;