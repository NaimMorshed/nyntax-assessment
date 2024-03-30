import logo from "../../assets/images/car-logo.png";
import "./Receipt.scss";

export default function Receipt() {
  return (
    <>
      <div className="receipt-container">
        <div className="receipt-left">
          <div className="receipt-header">
            <div className="header-left">
              <img src={logo} alt="" />
              <h3>RENTAL INFO</h3>
              <p>
                Shihab Ahmed <br />
                test@gmail.com <br />
                PH: 051945469
              </p>
            </div>
            <div className="header-right">
              <p>CH Cor Pface Inc <br />
              162 Bergen st <br />
              Brooklyn,NY 11213 <br />
              PH#</p>

              <p>Monday 9:00 AM-6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
