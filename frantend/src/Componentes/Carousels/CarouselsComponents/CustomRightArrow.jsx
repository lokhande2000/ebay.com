import React from 'react'

const CustomRightArrow = ({onClick}) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        right: 0,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
      }}
    >
      <img src="https://img.icons8.com/ios-filled/50/000000/chevron-right.png" alt="right arrow" />
    </div>
  )
}

export default CustomRightArrow
