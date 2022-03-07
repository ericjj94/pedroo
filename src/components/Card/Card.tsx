import { CardWrapper } from "./styled";

interface CardInterface {
  data: { title?: string; description?: string; id: number };
  onClick?: Function;
  image?: string;
}

const Card = ({ data: { title, description, id }, onClick, image }: CardInterface) => {
  return (
    <CardWrapper
      className="card"
      onClick={() => {
        if (onClick) {
          onClick(id);
        }
      }}
    >
      {image ? <img src={image} className="card-img-top" alt="card-pic"></img> : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </CardWrapper>
  );
};
export default Card;
