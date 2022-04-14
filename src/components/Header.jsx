import React, { useState } from 'react'
import "../assets/styles/header.css"
import {Link} from "react-scroll"
export const Header = () => {

  const [fixed, setFixed] = useState(false)
  const [menu, setMenu] = useState(false)

  const sticky = () => {
    if(window.scrollY > 0)
      setFixed(true)
    if(window.scrollY === 0)
      setFixed(false)
  }
  window.addEventListener("scroll", sticky)

  
  const openMenu = () => {
    setMenu(!menu)
  }

  return (
    <header id="inicio" className="header">
      <div className={fixed ? "header__menu sticky" : "header__menu"} onScroll={sticky}>
        <Link className="header__item header__item--logo" to="banner" spy={true} smooth={true} offset={0} duration={500}><span>.il()</span></Link>
        <nav className={menu ? "header__toggle active" : "header__toggle"}>
          <span className='header__close' onClick={openMenu}><span className="iconify-inline" data-icon="ant-design:close-outlined"></span></span>
            <ul className="header__list">
              <li className="header__item">
                {/* <a href="#"><span>.</span>il<span>()</span></a> */}
                <Link to="banner" spy={true} smooth={true} offset={0} duration={500} onClick={openMenu}><span>.</span>il<span>()</span></Link>
              </li>
              <li className="header__item">
                {/* <a href="#about"><span>.</span>sobreMi<span>()</span></a> */}
                <Link to="about" spy={true} smooth={true} offset={-30} duration={500} onClick={openMenu}><span>.</span>sobreMi<span>()</span></Link>
              </li>
              <li className="header__item">
                {/* <a href="#proyects"><span>.</span>proyectos<span>()</span></a> */}
                <Link to="proyects" spy={true} smooth={true} offset={-130} duration={500} onClick={openMenu}><span>.</span>proyectos<span>()</span></Link>
              </li>
              <li className="header__item">
                {/* <a href="#contact"><span>.</span>contacto<span>()</span></a> */}
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={openMenu}><span>.</span>contacto<span>()</span></Link>

              </li>
            </ul>
        </nav>
        <div className='header__buttons'>
          <span className='header__button header__button--burguer' onClick={openMenu}><span className="iconify-inline" data-icon="dashicons:menu"></span></span>
          <a className='header__button' href="https://github.com/ivan-lucero" target={"_blank"}><span className="iconify-inline" data-icon="akar-icons:github-fill"></span></a>
          <a className='header__button' href="https://www.linkedin.com/in/ivan-agustin-lucero-b034a7202/" target={"_blank"}><span className="iconify-inline" data-icon="akar-icons:linkedin-box-fill"></span></a>
        </div>
      </div>

      <section id='banner' className="banner">
        <div className='banner__container-desktop'>
          <h3 className='title'><span>.</span>il <span>() {"{"}</span></h3>
          <div className='banner__container'>
            <h2 className='banner__title'>Iván Lucero</h2>
            <h1 className='banner__subtitle'>Programador Web</h1>
          </div>
            <span className='title'>{"}"}</span>
        </div>
        <div className='banner__lines-desktop'>
          <div className='line-1-desktop'></div>
          <div className='line-2-desktop'></div>
          <div className='line-3-desktop'></div>
        </div>
      </section>
    </header>
  )
}
