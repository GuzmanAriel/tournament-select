import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
  } from 'reactstrap';
  import { NavLink } from 'react-router-dom';
import ProfilePicture from './images/ProfilePicture';
import Logo from '../assets/images/logo.png';
  
//   import Logo from 'https://placehold.co/200x80';

const Header = (props) => {
    const {isLoggedIn} = props
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top'>
            <NavbarBrand className='ms-5 logo' href='/'>
                <img src={Logo} alt='Tournament Select logo' className='float-start' />
            </NavbarBrand>
            <div className="d-flex align-items-center">
                
                <div className="flex navbar-user" >
                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} className="block">
                    {/* <i class="fa fa-user fa-lg" aria-hidden="true"></i> */}
                    {
                        isLoggedIn ? (
                        <ProfilePicture/>
                        ) : (
                            <svg  style={{ width: '55px', height: '55px', fill: "white"}} ixmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        )
                    }
                    </NavbarToggler>
                    
                </div>
            </div>
            
            
            <Collapse isOpen={menuOpen} className="navbar-collapse-user border border-secondary" navbar>
                <Nav className='ms-auto' navbar>
                    {!isLoggedIn && (
                        <>
                        <NavItem>
                            <NavLink className='nav-link' to='/sign-up'>
                                Sign up
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Log in
                            </NavLink>
                        </NavItem>
                        </>
                        
                    )}
                    
                    {isLoggedIn && (
                        <>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Dashboard
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='nav-link' to='/'>
                                Settings
                            </NavLink>
                        </NavItem>
                        </>
                        
                    )}
                   
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;