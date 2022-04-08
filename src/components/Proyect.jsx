import { useState } from "react"
import "../styles/proyect.css"

export const Proyect = (props) => {

  let {title, imgUrl} = props
  const [info, setInfo] = useState(false)

  const showInfo = () => {
    setInfo(!info)
  }

  return (
    <article className='proyect' onClick={showInfo}>
      <img className='proyect__img' src={imgUrl} alt={title} />
      <div className={info ? "proyect__info active" : "proyect__info "}>
        <h4 className='proyect__title'>{title}</h4>
        <span className="iconify-inline arrow" data-icon="la:hand-pointer"></span>
        <div className='proyect__buttons'>
          <button className='button'><span className="iconify icon" data-icon="mdi:web"></span>Ver el proyecto</button>
          <button className='button'><span className="iconify-inline icon" data-icon="akar-icons:github-fill"></span>Ver el repositorio</button>
        </div>
      </div>
    </article>
  )
}
