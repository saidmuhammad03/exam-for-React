const Button = ({ text, bg,brd, borRadius, h, w, col, borNone }) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: bg,
          borderRadius: borRadius,
          height: h,
          width: w,
          color: col,
          border: borNone,
          border: brd
        }}
      >
        {text}
      </button>
    </div>
  );
};
export default Button;
