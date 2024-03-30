import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Reservation.scss";

export default function Reservation() {
  const { state } = useLocation();
  const data = state && state.data;
  const [startDate, setStartDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [timeCount, setTimeCount] = useState("");
  const [reservationID, setReservationID] = useState("");
  const [newDays, setNewDays] = useState(0);
  const [newHours, setNewHours] = useState(0);
  const [newWeeks, setNewWeeks] = useState(0);
  const [collision, setCollision] = useState(false);
  const [insurance, setInsurance] = useState(false);
  const [tax, setTax] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // For Total calculation
  useEffect(() => {
    let sum = newHours * data.rates.hourly + newDays * data.rates.daily + newWeeks * data.rates.weekly;

    if(collision){
      sum += 9;
    }
    if(insurance){
      sum+=15;
    }
    if(tax){
      sum*=100/11.5;
    }
    setTotalPrice(sum);
  }, [collision, insurance, tax, timeCount])

  // For reservation ID
  useEffect(() => {
    const min = 10000000;
    const max = 99999999;
    const newId = Math.floor(Math.random() * (max - min + 1)) + min;
    setReservationID(newId);
  }, []);

  // Calendar
  useEffect(() => {
    const timeDifference = returnDate.getTime() - startDate.getTime();

    if (timeDifference < 0) {
      alert("Return date cannot be before pickup date.");
      setReturnDate(new Date());
    } else {
      const timeDifferenceInHours = timeDifference / (1000 * 3600);

      const days = Math.floor(timeDifferenceInHours / 24);
      const remainingHours = Math.floor(timeDifferenceInHours % 24);

      let result = "";
      let weeks = "";

      if (days > 6) {
        weeks = Math.floor(days / 7);
        const remainingDays = days % 7;
        result += `${weeks} week${weeks > 1 ? "s" : ""}`;
        if (remainingDays > 0) {
          result += ` ${remainingDays} day${remainingDays > 1 ? "s" : ""}`;
        }
      } else {
        result += `${days} day${days > 1 ? "s" : ""}`;
      }

      if (remainingHours > 0) {
        result += ` ${remainingHours} hour${remainingHours > 1 ? "s" : ""}`;
      }

      setTimeCount(result);
      setNewDays(days % 7);
      setNewHours(remainingHours);
      setNewWeeks(weeks === "" ? 0 : weeks);
    }
  }, [startDate, returnDate]);

 const handlePrintButton = () => {
  if (formData.firstName && formData.lastName && formData.email && formData.phone) {
    console.log(formData);
  }
 };

  return (
    <>
      <div className="reservation-container">
        <div className="header">
          <span>Reservation</span>
          <button onClick={handlePrintButton}>Print / Download</button>
        </div>
        <div className="reservation">
          <form>
            {/* ---------- Left ---------- */}
            <div>
              {/* ------ Reservation Details ------ */}
              <section className="parent">
                <span className="title">Reservation Details</span>
                <hr />
                <div className="box">
                  <div>
                    <label htmlFor="reservationId">Reservation ID</label>
                    <input
                      type="text"
                      name="reservationId"
                      value={reservationID}
                      disabled
                    />
                  </div>

                  <div>
                    <label htmlFor="pickupDate">
                      Pickup Date<span style={{ color: "red" }}>*</span>
                    </label>
                    <DatePicker
                      name="pickupDate"
                      wrapperClassName="datePicker"
                      dateFormat={"MM/dd/yyyy; hh:mm"}
                      showTimeSelect
                      timeIntervals={60}
                      timeFormat="HH:mm"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>

                  <div>
                    <label htmlFor="returnDate">
                      Return Date<span style={{ color: "red" }}>*</span>
                    </label>
                    <DatePicker
                      name="pickupDate"
                      wrapperClassName="datePicker"
                      dateFormat={"MM/dd/yyyy; hh:mm"}
                      showTimeSelect
                      timeIntervals={60}
                      timeFormat="HH:mm"
                      selected={returnDate}
                      onChange={(date) => setReturnDate(date)}
                    />
                  </div>

                  <div className="row">
                    <label htmlFor="duration">Duration</label>
                    <input
                      type="text"
                      name="duration"
                      value={timeCount}
                      disabled
                    />
                  </div>

                  <div>
                    <label htmlFor="Discount">Discount</label>
                    <input type="text" name="discount" />
                  </div>
                </div>
              </section>

              {/* ------ Reservation Details ------ */}
              <section className="parent">
                <span className="title">Vehicle Information</span>
                <hr />
                <div className="box">
                  <div>
                    <label htmlFor="vehicleType">Vehicle Type</label>
                    <input
                      type="text"
                      name="vehicleType"
                      value={data.type}
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicle">Vehicle</label>
                    <input
                      type="text"
                      name="vehicle"
                      value={data.make + " " + data.model + " " + data.year}
                      disabled
                    />
                  </div>
                </div>
              </section>
            </div>

            {/* ---------- Right ---------- */}
            <div>
              {/* ------ Customer Information ------ */}
              <section className="parent">
                <span className="title">Customer Information</span>
                <hr />
                <div className="box">
                  <div>
                    <label htmlFor="firstName">
                      First Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="lastName">
                      Last Name<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="email">
                      Email<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div>
                    <label htmlFor="phone">
                      Phone<span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>
              </section>

              {/* ------ Additional Charges ------ */}
              <section className="parent">
                <span className="title">Additional Charges</span>
                <hr />
                <div className="box">
                  <div className="checkbox-row">
                    <input
                      type="checkbox"
                      name="collision"
                      onClick={() => setCollision(!collision)}
                    />
                    <label htmlFor="collision">Collision Damage Waiver</label>
                    <span className="checkbox-charge">$9.0</span>
                  </div>
                  <div className="checkbox-row">
                    <input
                      type="checkbox"
                      name="insurance"
                      onClick={() => setInsurance(!insurance)}
                    />
                    <label htmlFor="insurance">Liability Insurance</label>
                    <span
                      className="checkbox-charge"
                      style={{ marginLeft: "70px" }}
                    >
                      $15.0
                    </span>
                  </div>
                  <div className="checkbox-row">
                    <input
                      type="checkbox"
                      name="tax"
                      onClick={() => setTax(!tax)}
                    />
                    <label htmlFor="tax">Rental Tax</label>
                    <span
                      className="checkbox-charge"
                      style={{ marginLeft: "125px" }}
                    >
                      11.5%
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </form>

          {/* ---------- Charges Summary ---------- */}
          <section className="summary">
            <span className="title">Charges Summary</span>
            <hr />
            <table>
              <tr>
                <th>Charge</th>
                <th>Unit</th>
                <th>Rate</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>Hourly</td>
                <td>{newHours}</td>
                <td>${data.rates.hourly}</td>
                <td>${newHours * data.rates.hourly}</td>
              </tr>
              <tr>
                <td>Daily</td>
                <td>{newDays}</td>
                <td>${data.rates.daily}</td>
                <td>${newDays * data.rates.daily}</td>
              </tr>
              <tr>
                <td>Weekly</td>
                <td>{newWeeks}</td>
                <td>${data.rates.weekly}</td>
                <td>${newWeeks * data.rates.weekly}</td>
              </tr>
              {collision && (
                <tr>
                  <td>Collision Damage Waiver</td>
                  <td></td>
                  <td>$9.00</td>
                  <td>$9.00</td>
                </tr>
              )}
              {insurance && (
                <tr>
                  <td>Liability Insurance</td>
                  <td></td>
                  <td>$15.00</td>
                  <td>$15.00</td>
                </tr>
              )}
              {tax && (
                <tr>
                  <td>Rental Tax</td>
                  <td></td>
                  <td>11.5%</td>
                  <td>11.5%</td>
                </tr>
              )}
              <tr>
                <th>Total</th>
                <th></th>
                <th></th>
                <th>${totalPrice.toFixed(2)}</th>
              </tr>
            </table>
          </section>
        </div>
      </div>
    </>
  );
}
