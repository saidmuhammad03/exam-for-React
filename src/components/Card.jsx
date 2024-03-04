const Card = ({ img, p1, p2 }) => {
  return (
    <div
      style={{
        boxShadow: "0 0 4px 2px rgb(170, 169, 169)",
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        height: "280px",
        width: "255px",
        justifyContent: "space-between",
      }}
    >
      <img src={img} alt="" />
      <p className="ml-[10px] text-[18px] font-[600]">{p1}</p>
      <p
        style={{ color: "rgba(59, 185, 109, 1)", textDecoration: "underline" }}
        className="mb-[10px] ml-[10px]"
      >
        {p2}
      </p>
    </div>
  );
};

export default Card;
