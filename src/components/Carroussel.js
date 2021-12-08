import "./Carroussel.css";
import Cart from "./Cart";
import bagsList from "../assets/dataBase";

const Caroussel = () => {
  console.log("bagsList", bagsList);

  return (
    <div className="CarousselContainer">
      {bagsList.map((bagItem) => {
        return <Cart urlImage={bagItem.url} bagName={bagItem.name} />;
      })}

      {/* ANCIENNE METHODE */}
      {/* <Cart
        urlImage="https://checkmybags.netlify.app/static/media/cabas-bi-matiere-poche-devant-avec-foulard.2187cb46.jpg"
        bagName="bag1"
      />
      <Cart
        urlImage="https://checkmybags.netlify.app/static/media/cabas-bi-matiere-poche-devant-avec-foulard.2187cb46.jpg"
        bagName="bag1"
      /> */}
    </div>
  );
};

export default Caroussel;
