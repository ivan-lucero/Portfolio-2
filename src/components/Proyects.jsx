import React from 'react'
import { Proyect } from './Proyect'
import "../assets/styles/proyects.css"
import luceroNievas from "../assets/img/proyects/luceroNievas.JPG"
import inDevelop from '../assets/img/proyects/en-desarrollo.jpg';

export const Proyects = () => {
  return (
    <>
    <section className='proyects'>
      <h3 id='proyects' className='title'><span>.</span>Proyectos <span>() {"{"}</span></h3>
      <div className='proyects__container'>
        <Proyect 
        title="Landing Page Lucero & Nievas" 
        imgUrl={luceroNievas} 
        // webUrl={"#"} 
        githubUrl={"https://github.com/ivan-lucero/LuceroNievas-Estudio-Juridico-LandingPage"}
        />

        <Proyect 
        title="E-Commerce productos Tech" 
        imgUrl={inDevelop} 
        />

        <Proyect 
        title="FutbolData - API de futbol" 
        imgUrl={inDevelop} 
        />
      </div>
      <span className='title'>{"}"}</span>
    </section>
    </>
  )
}
