const Shimmer = () => {
  return (
    <>
      <div className="cardArmy">
      {Array(10)
      .fill("")
      .map((e, index)=> { return (
        <div className="shimmer" key={index}> </div>
      )})}
      
      </div>
    </>
  );
};

export default Shimmer;
