import React from "react";

const LibraryIcon = ({ color, size, filled }) => {
  return (
    <>
      {filled ? (
        <svg
          fill={color}
          enable-background="new 0 0 24 24"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          focusable="false"
        >
          <path d="M4 20h14v1H3V6h1v14zM21 3v15H6V3h15zm-4 7.5L11 7v7l6-3.5z"></path>
        </svg>
      ) : (
        <svg
          fill={color}
          enable-background="new 0 0 24 24"
          height={size}
          viewBox="0 0 24 24"
          width={size}
          focusable="false"
        >
          <path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path>
        </svg>
      )}
    </>
  );
};

export default LibraryIcon;

LibraryIcon.defaultProps = {
  size:24,
  
}