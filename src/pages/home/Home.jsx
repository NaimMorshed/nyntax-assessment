import { useEffect, useState } from "react";
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaCarCrash } from "react-icons/fa";
import { FaBluetooth } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import axios from "axios";
import "./Home.scss";

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
              <section key={index} className="car-card">

                {/* car image */}
                <div className="image">
                  <img src={item.imageURL} alt="img" />
                </div>

                {/* brand make model */}
                <div className="header">
                  <h3>{item.make} {item.model}</h3>
                </div>

                {/* car features */}
                <div className="features">
                  <div>
                    <div>
                      <MdOutlineAirlineSeatReclineNormal />
                      <span>{item.seats} seats</span>
                    </div>
                    <div>
                      <GiCalendarHalfYear />
                      <span>{item.year}</span>
                    </div>
                    <div>
                      <IoCarSport />
                      <span>{item.type}</span>
                    </div>
                  </div>
                  <div>
                    <div>
                      <TbAirConditioning />
                      <span>{item.features.includes("Air Conditioning") ? "yes" : "no"}</span>
                    </div>
                    <div>
                      <FaBluetooth />
                      <span>{item.features.includes("Bluetooth") ? "yes" : "no"}</span>
                    </div>
                    <div>
                      <FaCarCrash />
                      <span>{item.bags} bags</span>
                    </div>
                  </div>
                </div>

                {/* rent button */}
                <div className="footer">
                  <span>$120/Day</span>
                  <button>Rent Car</button>
                </div>
              </section>
            ))}
        </main>

        {!data && <h4>Empty!</h4>}
      </div>
    </>
  );
}
