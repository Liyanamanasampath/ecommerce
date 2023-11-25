import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo.png'

const NavItems = () => {
    const [menuToggle,setMenuToggle] = useState(false)
    const [socialToggle, setSocialToggle] = useState(false)
    const [headerFixed, setHeaderFixed] = useState(false)

    //addevent listner
    window.addEventListener('scroll',()=>{
        if(window.scrollY > 200){
            setHeaderFixed(true);
        }else{
            setHeaderFixed(false);
        }
    })
  return (
    <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
        {/* header top started */}
        <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
            <div className='container'>
                <div className='header-top-area'>
                    <Link to='/signup' className='lab-btn me-3'><span>Create Account</span></Link>
                    <Link to='/login' ><span>Log In</span></Link>
                </div>
            </div>
        </div>

        {/* header bottom */}
        <div className='header-bottom'>
            <div className='container'>
                <div className='header-wrapper'>
                    {/* logo */}
                    <div className='logo-search-acte'>
                        <div className='logo'>
                            <Link to={'/'}>
                                <img src={logo} alt='logo'/>
                            </Link>
                        </div>
                    </div> 

                    {/* menu area */}
                    <div className='menu-area'>
                        <div className='menu'>
                            <ul className={`lab-ul ${menuToggle ? 'active' : ' '}`}>
                                <li><Link to='/'><span>Home</span></Link></li>
                                <li><Link to='/shop'><span>Shop</span></Link></li>
                                <li><Link to='/blog'><span>Blog</span></Link></li>
                                <li><Link to='/about'><span>About</span></Link></li>
                                <li><Link to='/contact'><span>Contact</span></Link></li>
                            </ul>
                        </div>
                        <Link to='/signup' className='lab-btn me-3 d-none d-md-block'><span>Create Account</span></Link>
                         <Link to='/login'  className='d-none d-md-block'><span>Log In</span></Link>

                        {/* menu toggler */}
                        <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                        {/* social toggle */}
                        <div className='ellepsis-bar d-md-none'  onClick={()=>setSocialToggle(!socialToggle)}>
                        <i class="icofont-info-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </header>
  )
}

export default NavItems