import React, { useState, useEffect } from "react";
interface InitialState {
  _loading: boolean;
  _error: boolean | null;
  _data: [] | null;
}
const useFetch = (url = "", options: any = null) => {
  let initialstate: InitialState = {
    _loading: false,
    _error: null,
    _data: [],
  };
  const [loading, setLoading] = useState(initialstate._loading);
  const [error, setError] = useState(initialstate._error);
  const [data, setData] = useState(initialstate._data);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((_data) => {
        if (isMounted) {
          setData(_data);
          setError(null);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setError(err);
          setData(null);
        }
      })
      .finally(() => isMounted && setLoading(false));
  }, [url, options]);

  return { loading, error, data };
};

export default useFetch;
