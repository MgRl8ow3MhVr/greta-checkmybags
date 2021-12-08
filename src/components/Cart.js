import "./Cart.css";
import Arc from "../assets/arc-de-triomphe626.jpg";

const Cart = (props) => {
  return (
    <div className="CartContainer">
      <div className="imageCartContainer">
        <img src="https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg" />
      </div>
      <div className="classic">CLASSIC</div>
      <div className="explore">EXPLORE</div>
    </div>
  );
};

export default Cart;
