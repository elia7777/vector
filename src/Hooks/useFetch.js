import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

function useFetch(url = "") {
  const baseUrl = "https://conduit.productionready.io/api";
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});
  const [token] = useLocalStorage("token");

  const doFetch = useCallback((options = {}) => {
    setOptions(options);
    setIsLoading(true);
  }, []);

  useEffect(() => {
    let skipResponseAfterDestroy = false;
    const requestOptions = {
      ...options,
      ...{
        headers: {
          authorization: token ? `Token ${token}` : "",
        },
      },
    };

    if (!isLoading) {
      return;
    }

    axios(baseUrl + url, requestOptions)
      .then((res) => {
        if (!skipResponseAfterDestroy) {
          setResponse(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (!skipResponseAfterDestroy) {
          setError(error.response.data);
          setIsLoading(false);
        }
      });

    return () => {
      skipResponseAfterDestroy = true;
    };
  }, [isLoading, url, options, token]);
  return [{ isLoading, response, error, token }, doFetch];
}
export default useFetch;
