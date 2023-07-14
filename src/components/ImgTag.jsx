import React from 'react'

const ImgTag = ({src,className,onClick,ariaExpanded=''}) => {
  return (

    <img className={className} alt="logo" src={src} onClick={onClick} aria-expanded={ariaExpanded}/>
  )
}

export default ImgTag