import React from 'react'
import logo from '../../images/logo.png'
import apiText from '../../images/api.png'
import s from './Layout.css'

const Layout = ({ children, contentRef, onContentScroll }) => {
  const [nav, content] = React.Children.toArray(children)
  return (
    <div q="root">
      <div q="header-and-nav">
        <header q="header">
          <h1 q="heading">
            <img
              q="logo"
              src={logo}
              width={100}
              height={29}
              alt="Spirit Ally"
            />
            <img
              q="api-text"
              src={apiText}
              width={25}
              height={18}
              alt="Spirit Ally"
            />
          </h1>
        </header>
        <div q="nav">
          {nav}
        </div>
      </div>
      <div
        q="content"
        ref={contentRef} 
        onScroll={onContentScroll}
      >
        {content}
      </div>
    </div>
  )
}

export default Layout
