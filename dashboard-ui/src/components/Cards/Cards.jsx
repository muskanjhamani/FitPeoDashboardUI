import { iconsImgs } from "../../utils/images";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="grid-one-item grid-c1">
      <div className="grid-c-title">
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} />
        </button>
      </div>
      {/* <div className="grid-c1-content">
            <p>Balance</p>
            <div className="lg-value">$ 22,000</div>
            <div className="card-wrapper">
                <span className="card-pin-hidden">**** **** **** </span>
                <span>1234</span>
            </div>
            <div className="card-logo-wrapper">
                <div>
                    <p className="text text-silver-v1 expiry-text">Expires</p>
                    <p className="text text-sm text-white">12/22</p>
                </div>
                <div className="card-logo">
                    <div className="logo-shape1"></div>
                    <div className="logo-shape2"></div>
                </div>
            </div>
        </div> */}
      <div className="earning">
              <img src={iconsImgs.card1} alt="card1image"></img>
              <div className="info">
                  <p>Earning</p>
                  <h3>$198K</h3>
              </div>
      </div>
    </div>
  );
}

export default Cards
