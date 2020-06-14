import { useState, useCallback,useEffect,useRef } from "react";

export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setIsLoading(true);
      const httpAbrtCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbrtCtrl);

      try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal : httpAbrtCtrl.signal
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
            reqCtrl => reqCtrl !== httpAbrtCtrl
          );

        if (!response.ok) {
          throw new Error(responseData.message);
        }
        setIsLoading(false);
        return responseData;
      } catch (err) {
        
        setError(err.message);
        setIsLoading(false);
        throw err;
      }
     
    },
    []
  );

  const clearError = () => {
      setError(null);
  }
  useEffect(()=> {
      return () => {
          activeHttpRequests.current.forEach(abortCtrl => abortCtrl.abort())
      }
  },[])
  return { isLoading, error, sendRequest,clearError };
};
