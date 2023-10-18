import "./ContentMain.css";
import Cards from "../Cards/Cards";
// import Transactions from "../Transactions/Transactions";
import Report from "../Report/Report";
// import Budget from "../Budget/Budget";
// import Subscriptions from "../Subscriptions/Subscriptions";
// import Savings from "../Savings/Savings";
import Loans from "../Loans/Loans";
import ProductSell from "../ProductSell/ProductSell";
// import Financial from "../Financial/Financial";

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
