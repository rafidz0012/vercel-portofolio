import { useNavigate } from "react-router-dom";
import "../style/IngredientsCard.css";

const IngredientsCard = ({ ingredients }) => {
  const navigate = useNavigate();

  return (
    <div
      className="ingredients-card"
      onClick={() => navigate(`/post/${ingredients.id}`)}
    >
      <img
        className="avatar"
        src="https://picsum.photos/200"
        alt="ingredients"
      />
      <div className="info">
        <h3>{ingredients.title}</h3>
        <p>{ingredients.body}</p>
      </div>
    </div>
  );
};
export default IngredientsCard;
