import React from "react";
import Movie from "components/Movie";

export default function Results(props) {
  const { results } = props;
  const [show, setShow] = React.useState(false); // Hides extra text until movie is searched

  return (
    <Movie
      Title={results.Title}
      Poster={results.Poster}
      Released={results.Released}
      setShow={setShow}
      show={show}
    />
  );
}
