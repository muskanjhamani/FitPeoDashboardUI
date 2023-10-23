// import { iconsImgs } from "../../utils/images";
import "./Loans.css";

const Loans = () => {
  return (
    <div className="grid-c7">
      <h3 className="customer-heading">Customers</h3>
      <h4 className="customer-heading">Customers that buy products</h4>
      <div className="grid-c7-content">
        <div className="progress-bar">
          <div className="percent">
            <svg>
              <circle cx="150" cy="105" r="60"></circle>
              {/* <circle cx="105" cy="105" r="50" style="--percent: 50"></circle> */}
            </svg>
            <div className="number">
              <h3>
                50<span>%</span>
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Loans
