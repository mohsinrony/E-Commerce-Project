import CustomerCareCard from "./CustomerCareCard";
import CategoriesCard from "./CategoriesCard";
import PhysicalStoreCard from "./PhysicalStoreCard";
import OffersPaymentCards from "./OffersPaymentCards";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
import tiktok from "../assets/tiktok.png";
import delivery from "../assets/delivery.png";
import "../CSS/CategoriesCard.css";
import "../CSS/CustomerCareCard.css";
import "../CSS/OfferPaymentsCards.css";
import "../CSS/PhysicalStoreCard.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="components">
          <CustomerCareCard
            heading="Customer Care"
            l1="Help center"
            l2="How to buys"
            l3="Return & Refund"
            l4="Contact us"
          />
          <CategoriesCard
            heading="All Categories"
            l1="About Blue Sweaters"
            l2="Careers"
            l3="Blogs"
            l4="Term and Conditions"
            l5="Privacy Policy"
            l6="More About Us"
          />
          <PhysicalStoreCard />
          <OffersPaymentCards heading="Exclusive Offers" />
        </div>
        <div className="last-part-footer">
          <div className="slogans">
            <div className="delivery">
              <p>we deliver to your foot steps</p>
              <img src={delivery} alt="delivery-icon" />
            </div>
            <div>We are Recognized by European E-commerce </div>
            <div className="social-media">
              <p>More About Us</p>
              <div>
                <img src={facebook} alt="facebook Icon" />
                <img src={insta} alt="insta Icon" />

                <img src={tiktok} alt="tiktok Icon" />
              </div>
            </div>
          </div>

          <div className="wish">Merry Christmas</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
