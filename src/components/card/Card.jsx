import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../button/Button";
import "./Card.css"

const Card = ({ title, image, route }) => {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      
    >
      <div className="card-information">
        <h3 className="">{title}</h3>
        <p className="">Tour</p>
      </div>
      {hovered && (
        <Button
         width="90%" height="45px" text="Ver Mas"
          onClick={() => navigate(route)}
        />
      )}
    </div>
  );
};

export default Card;