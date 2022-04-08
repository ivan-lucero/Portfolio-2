import React from 'react'
import { Proyect } from './Proyect'
import "../styles/proyects.css"
import luceroNievas from "../img/proyects/luceroNievas.JPG"
import inDevelop from '../img/proyects/en-desarrollo.jpg';

export const Proyects = () => {
  return (
    <>
    <section className='proyects'>
    <h3 className='title'><span>.</span>Proyectos <span>() {"{"}</span></h3>
      <Proyect title="Landing Page Lucero & Nievas" imgUrl={luceroNievas}/>
      <Proyect title="E-Commerce productos Tech" imgUrl={inDevelop} />
    <span className='title'>{"}"}</span>
    </section>
    </>
  )
}
