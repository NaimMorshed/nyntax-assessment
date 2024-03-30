import { useLocation } from "react-router-dom";
import logo from "../../assets/images/car-logo.png";
import "./Receipt.scss";

export default function Receipt() {
  const { state } = useLocation();
  const data = state && state.data;

  return (
    <>
      <div className="receipt">
        <div className="receipt-container">
          {/* ---------- LEFT SECTION ---------- */}
          <div className="left-section">
            <div className="div-row">
              <img src={logo} alt="logo" />
              <div>
                <p>CH Car Place Inc</p>
                <p>162 Berger st</p>
                <p>Brooklyn, NY 11213</p>
                <p>PH#</p>
              </div>
            </div>

            <div className="div-row">
              <div style={{ maxWidth: "145px", wordWrap: "break-word" }}>
                <h4>RENTER INFO</h4>
                <p>{data.firstName} {data.lastName}</p>
                <p>{data.email}</p>
                <p>PH: {data.phone}</p>
              </div>
              <div>
                <p>Monday 9:00 AM-6:00 PM</p>
                <p>Tuesday 9:00 AM-6:00 PM</p>
                <p>Wednesday 9:00 AM-6:00 PM</p>
                <p>Thursday 9:00 AM-6:00 PM</p>
                <p>Friday 9:00 AM-6:00 PM</p>
                <p>Saturday 9:00 AM-6:00 PM</p>
                <p>Sunday 9:00 AM-6:00 PM</p>
              </div>
            </div>

            <div>
              <h4>ADDITIONAL AUTHORIZED DRIVER(S)</h4>
              <br />
              <h4>UNIT DETAILS</h4>
              <p>Unit: NISSAN ROGUE BLACK</p>
              <p>Make & Model: NISSAN ROGUE BLACK</p>
              <br />
              <p>BILL TO:</p>
              <p>Payment Type: Unpaid</p>
              <p>AUTH: $0.00</p>
              <br />
              <p>Referral:</p>
              <p>
                NOTICE: Collision Insurance (CDW)- $7 per day
                Limit liability of damages to ones own vehicle up to
                $1000 in event of an accident,
              </p>
              <p>
                By waiving this coverage renter agrees to be hold
                liable for damages up to the entire value of the
                vehicle.
              </p>
            </div>

            <div>
              <span>Accept</span>
              <span>Reject</span>
            </div>

            <div>
              <p>
                Rental service may be refused anyone when done in the best
                interest of the renting company or customer - Rates do not
                include gasoline - Reserves the right to collect deposit
                covering estimated rental charges.
              </p>
            </div>
          </div>

          {/* ---------- RIGHT SECTION ---------- */}
          <div className="right-section">
            <h3>Reservation</h3>
            <h3>RA #0121</h3>
            <h5>REPAIR ORDER:</h5>
            <h5>CLAIM:</h5>
            <p>Date/Time Out: 03/29/2024 12:33 AM</p>
            <p>Date/Time In: 03/29/2024 01:33 AM</p>
            <div className="table-div">
              <h4>CHARGE SUMMARY</h4>
              <table>
                <tr>
                  <th></th>
                  <th>Unit</th>
                  <th>Price</th>
                  <th>Amount</th>
                </tr>
                <tr>
                  <td>Hourly</td>
                  <td>1</td>
                  <td>$0.50</td>
                  <td>$0.50</td>
                </tr>
                <tr>
                  <td>NYS State Tax</td>
                  <td></td>
                  <td>11.5%</td>
                  <td>$0.06</td>
                </tr>
                <tr>
                  <td>EST TOTAL TIME & MILEAGE</td>
                  <td></td>
                  <td></td>
                  <td>$0.56</td>
                </tr>
                <tr>
                  <td>Discount</td>
                  <td></td>
                  <td></td>
                  <td>-$0.00</td>
                </tr>
                <tr>
                  <td>Damages</td>
                  <td></td>
                  <td></td>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <td>Traffic tickets</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>TOTAL ESTIMATE CHARGES</td>
                  <td></td>
                  <td></td>
                  <td>$0.56</td>
                </tr>
                <tr>
                  <td>Renter Payments</td>
                  <td></td>
                  <td></td>
                  <td>$0.56</td>
                </tr>
              </table>
            </div>
            <div>
              <p style={{ textAlign: "justify" }}>
                Your rental agreement offers, for an additional charge, an
                optional waiver to cover all or a part of your responsibility
                for damage to or loss of the vehicle. Before deciding whether to
                purchase the waiver, you may wish to determine whether your own
                automobile insurance or credit card agreement provides you
                coverage for rental vehicle damage of loss and determine the
                amount of the deductible under your own insurance coverage. The
                purchase of the waiver is not mandatory. The waiver is not
                insurance. I acknowledge that I have received and read a copy of
                this.
              </p>
            </div>
            <div className="signature">
              <p>Renters Signature</p>
              <p>------------------------------------------</p>
              <p>Additional Driver 1</p>
              <p>------------------------------------------</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
