import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import { GiCalendarHalfYear } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { FaCarCrash } from "react-icons/fa";
import { FaBluetooth } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./Cars.scss";

export default function Cars({ props }) {
  const navigate = useNavigate();
  const { imageURL, make, model, seats, year, type, features, bags, rates } = props;

  const handleClick = () => {
    navigate('/reservation', { state: { data: props } });
  }

  return (
    <>
      <section className="car-card">

        {/* car image */}
        <div className="image">
          <img src={imageURL} alt="img" />
        </div>

        {/* brand make model */}
        <div className="header">
          <h3>
            {make} {model}
          </h3>
        </div>

        {/* car features */}
        <div className="features">
          <div>
            <div>
              <MdOutlineAirlineSeatReclineNormal />
              <span>{seats} seats</span>
            </div>
            <div>
              <GiCalendarHalfYear />
              <span>{year}</span>
            </div>
            <div>
              <IoCarSport />
              <span>{type}</span>
            </div>
          </div>
          <div>
            <div>
              <TbAirConditioning />
              <span>
                {features.includes("Air Conditioning") ? "yes" : "no"}
              </span>
            </div>
            <div>
              <FaBluetooth />
              <span>{features.includes("Bluetooth") ? "yes" : "no"}</span>
            </div>
            <div>
              <FaCarCrash />
              <span>{bags} bags</span>
            </div>
          </div>
        </div>

        {/* rent button */}
        <div className="footer">
          <span>${rates.daily}<span>/Day</span></span>
          <button onClick={handleClick}>Rent Car</button>
        </div>
      </section>
    </>
  );
}
