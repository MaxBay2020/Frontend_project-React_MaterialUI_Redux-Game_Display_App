import {useState} from 'react';
import './navbar.scss'
import Box from "@mui/material/Box";
import {Link, useLocation} from 'react-router-dom';
import Switch from '@mui/material/Switch'
import {useSelector, useDispatch} from 'react-redux'
import {toggleDarkMode} from "../../redux/features/darkMode";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation()
    const {pathname} = location
    const dispatch = useDispatch()
    const darkMode = useSelector(state => state.darkMode.value.darkMode)

    const switchDarkMode = () => {
        dispatch(toggleDarkMode({darkMode: !darkMode}))
    }

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <Box className='navbar'>
            <Link to='/'>
                <Box className='logo'>
                    <img src="https://wangxiaobei.herokuapp.com/public/images/logo.png" alt=""/>
                    <div className='title'>Max Game</div>
                </Box>
            </Link>

            <ul className="menubar">
                <Link to='/products'>
                    <li className={`${pathname === '/' || pathname === '/products' && 'active' }`}>Products</li>
                </Link>

                <Link to='/login'>
                    <li className={`${pathname === '/login' && 'active' }`}>Login</li>
                </Link>

                <li className='darkModeSwitcher'>
                    <span>Dark Mode</span>
                    <Switch onClick={()=>switchDarkMode()} />
                </li>
            </ul>

            <Box className={`small-screen-menu ${showMenu && 'toggleMenu'} `}>
                <ul className="menubar">
                    <Link to='/products'>
                        <li className={`${pathname === '/' || pathname === '/products' && 'active' }`}>Products</li>
                    </Link>

                    <Link to='/login'>
                        <li className={`${pathname === '/login' && 'active' }`}>Login</li>
                    </Link>

                    <li className='darkModeSwitcher'>
                        <span>Dark Mode</span>
                        <Switch onClick={()=>switchDarkMode()} />
                    </li>
                </ul>
            </Box>

            <Box className={`line-container ${showMenu && 'toggleMenu'}`}  onClick={() => toggleMenu()}>
                <div className="line line-1" />
                <div className="line line-2" />
                <div className="line line-3" />
            </Box>
        </Box>
    );
};

export default Navbar;
