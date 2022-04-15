import { useState, useEffect } from "react";

//Debounce function to prevent api calls from being called too frequently
export default function useDebounce(input, time) {
  const [debounce, setDebounce] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => setDebounce(input), time);
    return () => clearTimeout(timeout);
  }, [input, time]);

  return debounce;
};


