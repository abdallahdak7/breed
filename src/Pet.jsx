const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h4>{props.animal}</h4>
      <h3>{props.breed}</h3>
    </div>
  );
};

export default Pet;
