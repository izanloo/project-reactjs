import React from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function WithUser(Component) {
    const pathCurrent = window.location
    const pathCategory = '/category'
    return function UserLayout({ ...props }) {
        return (
            <>
                <div><Header /></div>
                <div>
                    {pathCurrent.pathname === pathCategory ? <Sidebar /> : null}
                </div>
                <Component {...props} />
            </>
        )
    }
}
export default WithUser