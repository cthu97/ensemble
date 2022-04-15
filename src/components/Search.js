import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import Results from "components/Results";

export default function Search() {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState({});

  // axios fetch results from ombdapi using term set by user
  useEffect(() => {
    const url = `https://www.omdbapi.com/?t=${term}&apikey=14e32499`;
    axios.get(url).then((response) => {
      setResults(response.data);
    });
  }, [term]);

  return (
    <>
      <main>
        <SearchBar onSearch={(term) => setTerm(term)} />
        <Results results={results} />
      </main>
    </>
  );
}
