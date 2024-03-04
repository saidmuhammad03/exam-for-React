const Card2 = ({ img, p1, p2 }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        height: "350px",
        width: "255px",
        justifyContent: "space-between",
      }}
    >
      <img src={img} alt="" />
      <p className="text-[19px] font-[700]">{p1}</p>
      <p className="pb-[20px]">{p2}</p>
    </div>
  );
};

export default Card2;
