import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Report from "../Report/Report";
import Loans from "../Loans/Loans";
import ProductSell from "../ProductSell/ProductSell";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        {/* <Transactions /> */}
      </div>
      <div className="content-grid-two">
        <Report />
        <Loans />
      </div>
      <ProductSell/>
    </div>
  );
}

export default ContentMain
