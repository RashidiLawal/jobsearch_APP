import React from 'react'
import Footer from "../molecules/Footer/index"
import Nav from "../molecules/Navbar/index"
import './layout.scss'

const Layout = ({isLoggedIn,children}) => {
  return (
    <main className='HolderParent'>
      <Nav islogin={isLoggedIn} />
      {children}
      <Footer/>
    </main>
  );
}

export default Layout