import React from 'react'
import logo from '../../images/logo.png'
import apiText from '../../images/api.png'
import s from './Layout.css'

const Layout = ({ children, contentRef, onContentScroll }) => {
  const [nav, content] = React.Children.toArray(children)
  return (
    <div className={s.root}>
      <div className={s.headerAndNav}>
        <header className={s.header}>
          <h1 className={s.heading}>
            <img
              src={logo}
              width={100}
              height={29}
              className={s.logo}
              alt="Spirit Ally"
            />
            <img
              src={apiText}
              width={25}
              height={18}
              className={s.apiText}
              alt="Spirit Ally"
            />
          </h1>
        </header>
        <div className={s.nav}>
          {nav}
        </div>
      </div>
      <div
        className={s.content}
        ref={contentRef} 
        onScroll={onContentScroll}
      >
        {content}
      </div>
    </div>
  )
}

export default Layout
