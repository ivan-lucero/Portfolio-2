import { useState } from "react"
import "../assets/styles/proyect.css"

export const Proyect = (props) => {

  let {title, imgUrl, webUrl, githubUrl} = props
  const [info, setInfo] = useState(false)

  const showInfo = () => {
    setInfo(!info)
  }

  return (
    <article className='proyect'>
      <img className='proyect__img' src={imgUrl} alt={title} />
      <div className={info ? "proyect__info active" : "proyect__info "} >
        <div className="proyect__title-click" onClick={showInfo}>
          <h4 className='proyect__title'>{title}</h4>
          <span className="iconify-inline arrow" data-icon="la:hand-pointer"></span>
        </div>
        <div className='proyect__buttons'>
          <a className='button' href={webUrl} target={"_blank"}><span className="iconify icon" data-icon="mdi:web"></span>Ver el proyecto</a>
          <a className='button' href={githubUrl} target={"_blank"}><span className="iconify-inline icon" data-icon="akar-icons:github-fill"></span>Ver mas . . .</a>
        </div>
      </div>
    </article>
  )
}
