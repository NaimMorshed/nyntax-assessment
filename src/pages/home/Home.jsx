import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const apiUrl = 'https://exam-server-7c41747804bf.herokuapp.com/carsList';
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [])

  return (
    <>
      <div style={{ border: "1px solid black", margin: "20px" }}>
        <div>
          {data && data.map((items, index) => (
            <div key={index}></div>
          ))}
        </div>
      </div>
    </>
  )
}
