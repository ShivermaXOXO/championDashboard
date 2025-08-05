import { useState,useEffect } from "react";
import { apiToken, SERVER_URL } from "../constants/apiConstants";

const useFetchChampion=()=>{
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `${SERVER_URL}?sort=armor&page=1&per_page=50&${apiToken}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return {data ,loading}
}
export default useFetchChampion;
 