import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import Cars from "../../components/card/Cars";

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
      <div className="home">
        <h2>Choose the vehicle you wish to rent</h2>

        {/* Cards section */}
        <main className="cards">
          {data &&
            data.map((item, index) => (
              <Cars props={item} key={index} />
            ))}
        </main>

        {!data && <h4>Empty!</h4>}
      </div>
    </>
  );
}
