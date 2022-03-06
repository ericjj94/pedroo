interface CardInterface {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardInterface) => {
  return (
    <div className="card" style={{ width: "18rem", margin: "0.5rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};
export default Card;
