import React from 'react'
import "../styles/contact.css"

export const Contact = () => {
  return (
    <section className='contact'>
      <h3 className='title'><span>.</span>Contacto <span>() {"{"}</span></h3>
      <form action='#'>
        <div className="form__container">
          <div className="form__group">
            <div className='input__box'>
              <input className='input'  type="text" name="name" id="name" placeholder='Nombre' />
            </div>
          </div>
          <div className="form__group">
            <div className="input__box">
              <input className='input' type="email" name="email" id="email" placeholder='Email' />
            </div>
          </div>
          <div className="form__group">
            <div className="input__box">
              <input className='input'  type="text" name="subject" id="subject" placeholder='Asunto' />
            </div>
          </div>
          <div className="form__group">
            <div className="input__box">
              <textarea className='input' name="message" id="message" cols="30" rows="5" placeholder='Mensaje'></textarea>
            </div>
          </div>
          <button className='button' type="submit">Enviar</button>
        </div>
        </form>
      <article className='contact__social'>
      <h3 className='title title--sub'><span>.</span>Redes sociales <span>=</span></h3>
        <div className='contact__icons'>
          <a href=""><span className="iconify-inline icon" data-icon="akar-icons:github-fill"></span></a>
          <a href=""><span className="iconify-inline icon" data-icon="akar-icons:linkedin-box-fill"></span></a>
        </div>
      </article>
      <span className='title'>{"}"}</span>

    </section>
  )
}
