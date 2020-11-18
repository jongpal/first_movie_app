import React from "react";
import "./Genre.css";
import { Link } from "react-router-dom";
function Genre() {
  return (
    <div className="g_button_container">
      <a
        href="http://127.0.0.1:3000/first_movie_app#/genre/drama"
        className="g_button_css"
      >
        drama
      </a>
      <a
        href="http://127.0.0.1:3000/first_movie_app#/genre/family"
        className="g_button_css"
      >
        family
      </a>
    </div>
  );
}
// function Genre() {
//   return (
//     <div className="g_button_container">
//       <Link
//         to={{
//           pathname: "/genre/drama",
//         }}
//         className="g_button_css"
//       >
//         drama
//       </Link>

//       <Link to="/genre/family" className="g_button_css">
//         family
//       </Link>
//     </div>
//   );
// }

export default Genre;
