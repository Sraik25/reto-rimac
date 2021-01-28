import React from 'react';
import {Link} from 'react-router-dom'
import '../assest/styles/components/Header.scss'

const Header = () => (
  <header>
    <div className="header">
      <Link href="/" className="header__logo"><span></span> </Link>
    </div>
  </header>
)

export default Header;