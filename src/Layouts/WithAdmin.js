import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin'

function WithAdmin(Component) {
    return function adminLayout({...props}) {
        return (
            <>			
            <div><HeaderAdmin/></div>

                <Component {...props} />
            </>
        )
    }
}
export default WithAdmin