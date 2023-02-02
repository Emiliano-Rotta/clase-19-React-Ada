const Card = ({ name, img }) => {
  return (
    <article>
      <h2>{name}</h2>
      <img src={img} alt="card" />
    </article>
  );
};

export default Card;
