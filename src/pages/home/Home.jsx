import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.scss";
import Cars from "../../components/card/Cars";

export default function Home() {
  const [data, setData] = useState(null);
  const [active, setActive] = useState("Day");

  const inactiveStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const activeStyle = {
    backgroundColor: "white",
    color: "black",
  };

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
        <div className="filter">
          <button onClick={() => setActive("Hour")} style={ active === "Hour" ? activeStyle: inactiveStyle }>Hourly</button>
          <button onClick={() => setActive("Day")} style={ active === "Day" ? activeStyle: inactiveStyle }>Daily</button>
          <button onClick={() => setActive("Week")} style={ active === "Week" ? activeStyle: inactiveStyle }>Weekly</button>
        </div>

        {/* Cards section */}
        <main className="cards">
          {data &&
            data.map((item, index) => (
              <Cars props={item} key={index} state={active} />
            ))}
        </main>

        {!data && <h4>Empty!</h4>}
      </div>
    </>
  );
}
