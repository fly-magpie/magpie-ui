// UseApi.js
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function UseApi(url, method = "GET", body = {}, headers = {}, query = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {

    console.log({...body});
    if (body && (body as { message: null }).message === null) {
      console.log("body.message is null");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios({
        method,
        url,
        params: query,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        data: body,
      });

      setData(response.data);
      setIsLoading(false);
      return response.data; // Return the response data
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // No cleanup function needed
  }, []); // this is very important, it will run only once

  return { data, isLoading, error, execute: fetchData };
}

export default UseApi;