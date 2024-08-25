import LogoImage from '/src/assets/freeshow.png'
import PropTypes from 'prop-types'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const isMobile = window.innerWidth <= 768

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { isLoggedin } = useContext(AuthContext)

    const headerMenu = isLoggedin ? ['Home', 'Movies', 'Shows', 'Profile'] : ['signin', 'signup'];
    const darkMode = true;

    const toggleMobileHeaderMenu = () => {
        setMobileMenuOpen(prev => !prev)
    }

    return (
        <header>
            <a href="">
                <img src={LogoImage} alt="_logo image_" className='logo-image' />
                FreeStream
            </a>

            <nav>
                {darkMode ?
                    <button className='theme-icon'><MdDarkMode /></button>
                    : <button className='theme-icon'><MdOutlineLightMode /></button>}

                {isMobile ? <>
                    <button className='menu-toggle-icon' onClick={toggleMobileHeaderMenu}>
                        <TiThMenu />
                    </button>
                    <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <button className='menu-toggle-icon' onClick={toggleMobileHeaderMenu}>
                                    <RxCross2 />
                                </button>
                            </li>
                            {headerMenu.map((item, ind) => (
                                <li key={ind} className='menu-item'><a href="">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </> : <ul>
                    {headerMenu.map((item, ind) => (
                        <li key={ind} className='menu-item'><a href="">{item}</a></li>
                    ))}
                </ul>}
            </nav>
        </header>
    )
}

Header.propTypes = {
    isMobile: PropTypes.bool
}

export default Header