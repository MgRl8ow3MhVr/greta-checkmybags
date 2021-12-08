import "./Cart.css";
import Arc from "../assets/arc-de-triomphe626.jpg";

const Cart = () => {
  return (
    <div className="CartContainer">
      <div className="imageCartContainer">
        <img
          className="imageCart"
          src="https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg"
        />
        <span>CLASSIC</span>
        <span>EXPLORE</span>
      </div>
    </div>
  );
};

export default Cart;
