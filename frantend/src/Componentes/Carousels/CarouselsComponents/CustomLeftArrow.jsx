import React from 'react'

const CustomLeftArrow = ({ onClick }) => {
  return (
    <div
    onClick={onClick}
    style={{
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      cursor: "pointer",
    }}
  >
    <img src="https://img.icons8.com/ios-filled/50/000000/chevron-left.png" alt="left arrow" />
  </div>
  )
}

export default CustomLeftArrow
