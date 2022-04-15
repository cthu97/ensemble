import React, { useState, useEffect, useCallback } from "react";

import useDebounce from "hooks/useDebounce";

export default function SearchBar(props) {
  const [value, setValue] = useState("");
  const term = useDebounce(value, 200); // set delay between user typing and api call

  const onSearch = useCallback(props.onSearch, [term]); // only calls when input has changed

  useEffect(() => {
    onSearch(term);
  }, [term, onSearch]);

  return (
    <section className="search">
      <form className="search__form">
        <input
          placeholder="Search Movies"
          name="search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </section>
  );
}
