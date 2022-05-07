import React from 'react';
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

function WithUser(Component) {
    return function UserLayout({ ...props }) {
        return (
            <>
                <div><Header /></div>
            
                <Component {...props} />
            </>
        )
    }
}
export default WithUser