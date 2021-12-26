import weth from "../assets/eth.png";
import "./CollectionCards.css";

const CollectionCard = ({ id, name, traits, image }) => {
  return (
    <div className="collectionCard">
      <img src={image} />
      <div className="details">
        <div className="name">
          {name} <div className="id">#{id}</div>
        </div>
        <div className="priceContainer">
          <img src={weth} className="wethImage" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
