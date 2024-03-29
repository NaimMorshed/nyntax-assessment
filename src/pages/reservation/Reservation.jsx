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
              <span className="title">Vehicle Information</span>
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
            {/* ------ Customer Information ------ */}
            <section className="parent">
              <span className="title">Customer Information</span>
              <hr />
              <div className="box">
                <div>
                  <label htmlFor="firstName">
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="firstName" />
                </div>

                <div>
                  <label htmlFor="lastName">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="lastName" />
                </div>

                <div>
                  <label htmlFor="email">
                    Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="email" name="email" />
                </div>

                <div>
                  <label htmlFor="phone">
                    Phone<span style={{ color: "red" }}>*</span>
                  </label>
                  <input type="text" name="phone" />
                </div>
              </div>
            </section>

            {/* ------ Additional Charges ------ */}
            <section className="parent">
              <span className="title">Additional Charges</span>
              <hr />
              <div className="box">
                <div className="checkbox-row">
                  <input type="checkbox" name="collision" />
                  <label htmlFor="collision">Collision Damage Waiver</label>
                  <span className="checkbox-charge">$9.0</span>
                </div>
                <div className="checkbox-row">
                  <input type="checkbox" name="insurance" />
                  <label htmlFor="insurance">Liability Insurance</label>
                  <span className="checkbox-charge" style={{ marginLeft: "70px" }}>$15.0</span>
                </div>
                <div className="checkbox-row">
                  <input type="checkbox" name="tax" />
                  <label htmlFor="tax">Rental Tax</label>
                  <span className="checkbox-charge" style={{ marginLeft: "125px" }}>11.5%</span>
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
              <td>Daily</td>
              <td>1</td>
              <td>$99.00</td>
              <td>$99.00</td>
            </tr>
            <tr>
              <td>Weekly</td>
              <td>1</td>
              <td>$390.00</td>
              <td>$390.00</td>
            </tr>
            <tr>
              <td>Collision Damage Waiver</td>
              <td></td>
              <td>$9.00</td>
              <td>$9.00</td>
            </tr>
            <tr>
              <th>Collision Damage Waiver</th>
              <th></th>
              <th></th>
              <th>$498.00</th>
            </tr>
          </table>
        </section>
      </div>
    </>
  );
}
