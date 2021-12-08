import "./Hero.css";
import dauphins from "../assets/dauphin.jpg";

const Hero = () => {
  return (
    <div className="Hero" style={{ backgroundImage: `url(${dauphins})` }}>
      <span>Mon texte centré</span>
    </div>
  );
};

export default Hero;
