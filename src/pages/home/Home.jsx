import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://exam-server-7c41747804bf.herokuapp.com/carsList"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data &&
          data.map((item, index) => (
            <div key={index}>
              <h4>{item.id}</h4>
            </div>
          ))}
      </div>
    </>
  );
}
