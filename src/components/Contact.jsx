import React, { useState } from 'react'
import "../assets/styles/contact.css"
import emailjs from "@emailjs/browser"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { FormContact } from './FormContact'

export const Contact = () => {
  
    



  

  return (
    <section id='contact' className='contact'>
      <h3 className='title'><span>.</span>Contacto <span>() {"{"}</span></h3>
      <div className='contact__grid'>
        
        <FormContact/>

        {/* <form autoComplete='off'>
          <div className="form__container">
            <div className="form__group">
              <div className='input__box'>
                <input className='input' type="text" name="name" id="name" placeholder='Nombre y Apellido' />
              </div>
            </div>
            <div className="form__group">
              <div className="input__box">
                <input className='input' type="email" name="email" id="email" placeholder='Email' />
              </div>
            </div>
            <div className="form__group">
              <div className="input__box">
                <input className='input' type="text" name="subject" id="subject" placeholder='Asunto' />
              </div>
            </div>
            <div className="form__group">
              <div className="input__box">
                <textarea className='input' name="message" id="message" cols="30" rows="5" placeholder='Mensaje'></textarea>
              </div>
            </div>
            <button className='button' type="submit">Enviar</button>
          </div>
        </form> */}

        <article className='contact__social'>
        <h3 className='title title--sub'><span>.</span>Redes sociales <span>=</span></h3>
          <div className='contact__icons'>
            <a href="https://github.com/ivan-lucero" target={"_blank"}><span className="iconify-inline icon" data-icon="akar-icons:github-fill"></span></a>
            <a href="https://www.linkedin.com/in/ivan-agustin-lucero-b034a7202" target={"_blank"}><span className="iconify-inline icon" data-icon="akar-icons:linkedin-box-fill"></span></a>
          </div>
        </article>
      </div>
      
      <span className='title'>{"}"}</span>

    </section>
  )
}
