import React from 'react'
import "../assets/styles/about.css"
import perfil from "../assets/img/foto-perfil.png"
import { Tecnology } from './Tecnology'
import cv from "../assets/pdf/CV-IvanLucero.pdf"

export const AboutMe = () => {
  return (
    <main id='about' className='about'>
      
      <article className='bio'>
        <h3 className='title'><span>.</span>sobreMi<span> () {"{"}</span></h3>
        <div className='bio__line2'></div>
        <div className='bio__container'>
          <img className='bio__img' src={perfil} alt="foto de perfil" />
          <div className='bio__container-text'>
            <p className='bio__text'>
              Hola, Mi nombre es Iván, tengo 24 años, nací y vivo en San Luis, Argentina. Soy Programador Web Full-Stack, mas interesado en el Backend.
            </p>
            <p className='bio__text'>
            Actualmente estudio Tecnicatura en Web en la Universidad Nacional de San Luis (UNSL), y al mismo tiempo aprendo tecnologias web de manera autididacta para continuar progresando en mis conocimientos.
            </p>
          </div>
        </div>
        <a className='button' href={cv} target={'_blank'}><span className="iconify-inline icon" data-icon="bxs:download"></span>Descargar CV</a>
        <div className='bio__line3'></div>
      </article>

      <article className='tecnologies'>
      <h3 className='title title--sub'><span>.</span>tecnologias <span>=</span></h3>
      <div className='tecnologies__container'>
        <div className='tecnologies__container-flex'>
          <Tecnology name="PHP" />
          <Tecnology name="Laravel" />
          <Tecnology name="MySql" />
          <Tecnology name="Javascript" />
          <Tecnology name="React" />
          <Tecnology name="CSS" />
          <Tecnology name="Bootstrap" />
          <Tecnology name="HTML" />
          <Tecnology name="Git" />
        </div>
        <div className='tecnologies__container-flex'>
          <Tecnology name="Insomnia / Postman" secundary={true}/>
          <Tecnology name="Composer / npm" secundary={true}/>
          <Tecnology name="Java" secundary={true}/>
          <Tecnology name="Adobe Illustrator / Photoshop" secundary={true}/>
          <Tecnology name="Figma" secundary={true}/>
        </div>
      </div>
      </article>

      <span className='title'>{"}"}</span>
      <div className='bio__line4'></div>
    </main>
    
  )
}
