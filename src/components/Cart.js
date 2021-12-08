import "./Cart.css";

const Cart = (props) => {
  console.log(props);

  return (
    <div className="CartContainer">
      <div className="imageCartContainer">
        <img src={props.urlImage} />
      </div>
      <div className="classic">{props.bagName}</div>
      <div className="explore">EXPLORE</div>
    </div>
  );
};

export default Cart;
