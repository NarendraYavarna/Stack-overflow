import React from 'react'

const Avatar = ({children, color, backgroundColor, py,px, borderRadius, cursor, fontSize}) => {
  const style = {
    color: color || "black",
    backgroundColor,
    padding: `${py} ${px}`,
    borderRadius,
    fontSize,
    TextDecoration: "none",
    cursor: cursor || null
  }
  return ( 
  
    <div style ={style}>
      {children}
    </div>
  )
}

export default Avatar
