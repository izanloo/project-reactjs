import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'

function WithUser(Component) {
    const pathCurrent = window.location
    const pathCategory = '/category'
    return function UserLayout({ ...props }) {
        return (
            <>
                <div><Header /></div>
                <div style={{paddingTop:' 64px'}} >
                    {pathCurrent.pathname === pathCategory ? <Sidebar /> : null}
                </div>
                <Component {...props} />
                <Footer/>
            </>
        )
    }
}
export default WithUser