import React from 'react'
import './header.css'
import Nav from './Nav'
function HeaderSection() {
  return (
    <div>
       <header className='header'>
      <img src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/05/online-learning.jpeg.jpg' className='logo'/>
     
     <div className='title'> <h2>OnlineBanking</h2>
      <p className='subtitle'>Trustworthy</p>
      </div>
      <nav>
        <ul className='nav'>
          <li className='navlinks'><a href='#'>HOME</a></li>
          <li className='navlinks'><a href='#'>ABOUTUS</a></li>
          <li className='navlinks'><a href='#'>SERVICES</a></li>
          <li className='navlinks'><a href='#'>CONTACTUS</a></li>
        </ul> 
      </nav>
      </header>
      <body>
        <Nav/>
      </body>
    </div>
  )
}

export default HeaderSection
