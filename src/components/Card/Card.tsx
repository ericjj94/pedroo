interface CardInterface {
  data: { title?: string; description?: string; id: number };
  onClick?: Function;
  image?: string;
}

const Card = ({ data: { title, description, id }, onClick, image }: CardInterface) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "0.5rem", cursor: "pointer" }}
      onClick={() => {
        if (onClick) {
          onClick(id);
        }
      }}
    >
      {image ? <img src={image} className="card-img-top" alt="..."></img> : null}
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
export default Card;
