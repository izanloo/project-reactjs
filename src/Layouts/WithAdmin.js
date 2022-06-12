import React from 'react';
import HeaderAdmin from '../Components/HeaderAdmin'
import Footer from '../Components/Footer'


function WithAdmin(Component) {
    return function adminLayout({...props}) {
        return (
            <>			
            <div><HeaderAdmin/></div>

                <Component {...props} /> 
                <Footer/>
            </>
        )
    }
}
export default WithAdmin