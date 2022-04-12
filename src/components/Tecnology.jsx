import React from 'react'
import "../assets/styles/tecnology.css"

export const Tecnology = (props) => {
  let {name, secundary} = props
  return (
    <div className='tecnology'>
      <div className={secundary ? "tecnology__square tecnology__square--secundary" : "tecnology__square"}></div>
      <p className={secundary ? "tecnology__text tecnology__text--secundary" : "tecnology__text"}>{name}</p>
    </div>
  )
}
