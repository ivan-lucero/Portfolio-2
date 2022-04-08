import React, { useState } from 'react'
import "../styles/header.css"

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
        <a className="header__item header__item--logo" href="#"><span>.il()</span></a>
        <nav className={menu ? "header__toggle active" : "header__toggle"}>
          <span className='header__close' onClick={openMenu}><span className="iconify-inline" data-icon="ant-design:close-outlined"></span></span>
            <ul className="header__list">
              <li className="header__item"><a href="#inicio"><span>.</span>il<span>()</span></a></li>
              <li className="header__item"><a href="#sobremi"><span>.</span>sobreMi<span>()</span></a></li>
              <li className="header__item"><a href="#proyectos"><span>.</span>proyectos<span>()</span></a></li>
              <li className="header__item"><a href="#contacto"><span>.</span>contacto<span>()</span></a></li>
            </ul>
        </nav>
        <div className='header__buttons'>
          <span className='header__button header__button--burguer' onClick={openMenu}><span className="iconify-inline" data-icon="dashicons:menu"></span></span>
          <a className='header__button' href="https://github.com/ivan-lucero" target={"_blank"}><span className="iconify-inline" data-icon="akar-icons:github-fill"></span></a>
          <a className='header__button' href="https://www.linkedin.com/in/ivan-agustin-lucero-b034a7202/" target={"_blank"}><span className="iconify-inline" data-icon="akar-icons:linkedin-box-fill"></span></a>
        </div>
      </div>

      <section className="banner">
        <h3 className='title'><span>.</span>il <span>() {"{"}</span></h3>
        <div className='banner__container'>
          <h2 className='banner__title'>Ivan Lucero</h2>
          <h1 className='banner__subtitle'>Programador Web (Backend)</h1>
        </div>
        <span className='title'>{"}"}</span>
      </section>
    </header>
  )
}
