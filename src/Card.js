// const Card = () => {
//   return (
//     <>
//       <h2>personajes</h2>
//     </>
//   );
// };

// export default Card;


const Card = ({ name, img }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={img} alt="card" />
    </>
  );
};

export default Card;
