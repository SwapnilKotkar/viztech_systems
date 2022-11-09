import React from "react";

const NavLogo = ({color, width, height, bgColor}) => {
  return (
    <>
      <svg width={width || ""} height={height || "30"} viewBox="0 0 323 174" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M211.368 0H322.5L302.126 43.5H190.994L211.368 0Z" fill={color || "black"}/>
        <path d="M149.874 130.5H261.007L240.632 174H129.5L149.874 130.5Z" fill={color || "black"}/>
        <path d="M191.5 47H217.62L261 127H234.319L191.5 47Z" fill={color || "black"}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M109.319 0H0.5L96.2 174L150.659 74.9829L109.319 0ZM167.767 43.8775L191.9 0H143.577L167.767 43.8775Z" fill={color || "black"}/>
      </svg>

    </>
  );
};

export default NavLogo;
