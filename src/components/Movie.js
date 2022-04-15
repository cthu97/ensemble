import React from "react";
import { Button } from "@material-ui/core";

import "./Movie.css";

export default function Movie(props) {
  //Prevent text from showing up unless there is a movie searched
  if (props.Released) {
    props.setShow(true);
  } else {
    props.setShow(false);
  }

  return (
    /* Returns movie title, release date, poster (unless there is none), and button */
    <article className="movie">
      <h1 className="movie__name">{props.Title}</h1>
      {props.show ? (
        <div className="movie__released"> Release Date: {props.Released} </div>
      ) : null}
      <img
        className="movie__poster"
        src={props.Poster}
        d
        style={{ textAlign: "center", color: "white" }}
        alt={props.show ? "Poster Not Found" : null}
      />
      {props.show ? <Button id="btn">{props.Title}</Button> : null}
    </article>
  );
}
