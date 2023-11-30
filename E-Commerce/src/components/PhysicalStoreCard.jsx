import Location from "../assets/Location.png";
function PhysicalStoreCard(props) {
  return (
    <div className="Stores-card">
      <div>
        <h1>Our Physical Stores</h1>
        <ul>
          <li>Helsinki</li>
          <li>Espoo</li>
          <li>Blogs</li>
          <li>Vantaa</li>
          <li>Tampere</li>
        </ul>
      </div>

      <div className="locationImage">
        <img src={Location} alt="LocationIcon" />
      </div>
    </div>
  );
}

export default PhysicalStoreCard;
