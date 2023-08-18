const CartSvg = ({color,fillColor}) => {
  return (
    <svg
      style={{  strokeWidth: "2px", stroke: fillColor==="#60b246"?fillColor:color }}
      viewBox="-1 0 37 32"
      height="20"
      width="20"
      fill={fillColor}
    >
      <path d="M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z"></path>
    </svg>
  );
};

export default CartSvg;
