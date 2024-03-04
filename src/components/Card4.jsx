const Card4 = ({ img, p1 }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(39, 200, 218, 1)",
        borderRadius: "5px",
        width: "350px",
        height: "90px",
        display: "flex",
        alignItems: "center",
        paddingLeft: "25px",
      }}
      className="w-[290px] text-[white]"
    >
      <img
        style={{
          backgroundColor: "white",
          borderRadius: "50%",
          height: "55px",
        }}
        src={img}
        alt=""
      />
      <div>
        <p className="pl-[10px]">{p1}</p>
      </div>
    </div>
  );
};

export default Card4;
