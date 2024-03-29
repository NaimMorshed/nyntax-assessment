import { useLocation } from "react-router-dom";
import "./Reservation.scss";

export default function Reservation() {
  const { state } = useLocation();
  const data = state && state.data;

  return (
    <>
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
                  <input type="text" name="reservationId" />
                </div>

                <div>
                  <label htmlFor="pickupDate">
                    Pickup Date<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="datetime" name="pickupDate" />
                </div>

                <div>
                  <label htmlFor="returnDate">
                    Return Date<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="datetime" name="returnDate" />
                </div>

                <div className="row">
                  <label htmlFor="duration">Duration</label>
                  <input type="text" name="duration" disabled />
                </div>

                <div>
                  <label htmlFor="Discount">Discount</label>
                  <input type="text" name="discount" />
                </div>
              </div>
            </section>

            {/* ------ Reservation Details ------ */}
            <section className="parent">
              <span className="title">Reservation Details</span>
              <hr />
              <div className="box">
                <div>
                  <label htmlFor="vehicleType">
                    Vehicle Type<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="vehicleType" />
                </div>
                <div>
                  <label htmlFor="vehicle">
                    Vehicle<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="vehicle" />
                </div>
              </div>
            </section>
          </div>

          {/* ---------- Right ---------- */}
          <div>
            {/* ------ Reservation Details ------ */}
            <section className="parent">
              <span className="title">Reservation Details</span>
              <hr />
              <div className="box">
                <div>
                  <label htmlFor="reservationId">Reservation ID</label>
                  <input type="text" name="reservationId" />
                </div>

                <div>
                  <label htmlFor="pickupDate">
                    Pickup Date<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="datetime" name="pickupDate" />
                </div>

                <div>
                  <label htmlFor="returnDate">
                    Return Date<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="datetime" name="returnDate" />
                </div>

                <div className="row">
                  <label htmlFor="duration">Duration</label>
                  <input type="text" name="duration" disabled />
                </div>

                <div>
                  <label htmlFor="Discount">Discount</label>
                  <input type="text" name="discount" />
                </div>
              </div>
            </section>

            {/* ------ Reservation Details ------ */}
            <section className="parent">
              <span className="title">Reservation Details</span>
              <hr />
              <div className="box">
                <div>
                  <label htmlFor="vehicleType">
                    Vehicle Type<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="vehicleType" />
                </div>
                <div>
                  <label htmlFor="vehicle">
                    Vehicle<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="vehicle" />
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
            <tr></tr>
          </table>
        </section>
      </div>
    </>
  );
}
