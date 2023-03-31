import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios(url);
      setData(data);
      setError(false);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {};
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
