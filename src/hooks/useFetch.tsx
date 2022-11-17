import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [errorInformation, setErrorInformation] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      // how do i add console.log here
      .then(
        (res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Failed to fetch the data");
          }
          return res.json();
        } //https://stackoverflow.com/questions/48774535/js-fetch-api-get-method-return-%C6%92-json-native-code
      )
      .then((result) => {
        setTimeout(() => {
          setData(result);
          setIsLoaded(false);
        }, 3000);
      })
      .catch((res) => {
        if (res.name === "AbortError") {
          console.log("Abort Error");
        } else {
          setErrorInformation(res.message);
          setIsLoaded(false);
        }
      });
    return () => {
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoaded, errorInformation };
};

export default useFetch;
