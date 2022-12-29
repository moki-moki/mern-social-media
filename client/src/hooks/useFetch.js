import { useEffect, useState } from "react";

const init = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function useFecth(url, options = init, dependencies = []) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(url, options)
      .then((res) => {
        setData(res.json());
        setLoading(false);
      })
      .catch((error) => {
        if (error) {
          setError(true);
          setLoading(false);
          console.log(error);
        }
      });
  }, [dependencies]);

  return { data, loading, error, setData };
}
