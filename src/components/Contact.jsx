import React, { useState } from 'react'
import "../assets/styles/contact.css"
import emailjs from "@emailjs/browser"
import {Formik, Form, Field, ErrorMessage} from 'formik'
import { FormContact } from './FormContact'

export const Contact = () => {
  
    



  

  return (
    <section id='contact' className='contact'>
      <h3 className='title'><span>.</span>Contacto <span>() {"{"}</span></h3>
      <p className='contact__text'>Contactame si queres comenzar un proyecto o que sea parte de tu equipo</p>
      <div className='contact__grid'>
        <FormContact/>
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
