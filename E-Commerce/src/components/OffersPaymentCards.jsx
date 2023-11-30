import apple from "../assets/apple.png";
import googlePay from "../assets/googlePay.png";
import giftCard from "../assets/giftCard.png";
import masterCard from "../assets/masterCard.png";
import qrcode100 from "../assets/qrcode100.png";
function OffersPaymentCards(props) {
  return (
    <div className="extra">
      <div className="offers">
        <h2>{props.heading} </h2>
        <div className="scan">
          <p>Scan ME</p>
          <img src={qrcode100} alt="qrcode" />
        </div>
      </div>
      <div className="payment">
        Payment Method
        <div className="payment-icon">
          <img src={apple} alt="payment-icon" />
          <img src={googlePay} alt="payment-icon" />
          <img src={giftCard} alt="payment-icon" />
          <img src={masterCard} alt="payment-icon" />
        </div>
      </div>
    </div>
  );
}

export default OffersPaymentCards;
