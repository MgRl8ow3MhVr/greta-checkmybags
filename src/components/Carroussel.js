import "./Carroussel.css";
import Cart from "./Cart";

const Caroussel = () => {
  return (
    <div className="CarousselContainer">
      <Cart
        urlImage="https://checkmybags.netlify.app/static/media/bandouliere-back-to-school.0750d39c.jpg"
        bagName="sac1"
      />
      <Cart
        urlImage="https://checkmybags.netlify.app/static/media/bandouliere-poignee-metal-et-bi-matiere.8bdd8c3c.jpg"
        bagName="sac2"
      />
      <Cart urlImage="https://checkmybags.netlify.app/static/media/cabas-bi-matiere-poche-devant-avec-foulard.2187cb46.jpg" />
    </div>
  );
};

export default Caroussel;
