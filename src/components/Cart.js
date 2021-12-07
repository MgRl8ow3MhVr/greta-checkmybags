import "./Cart.css";
import Arc from "../assets/arc-de-triomphe626.jpg";

const Cart = () => {
  return (
    <div className="CartContainer">
      UNE CARTE
      {/* METHODE 1 - LIEN 'INTERNET' CLASSIQUE */}
      <img src="https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg" />
      {/* METHODE 2 - POUR UNE IMAGE PLACEE EN LOCAL DANS ASSETS */}
      <img src={Arc} />
    </div>
  );
};

export default Cart;
