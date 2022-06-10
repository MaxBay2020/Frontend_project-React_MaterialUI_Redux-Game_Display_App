import React from 'react';
import Navbar from "../components/navbar/Navbar";

const Layout = ({children, darkMode}) => {

    // console.log(darkMode)
    return (
        <div className={`${darkMode && 'dark'}`}>
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
