import React from 'react'
import NavBar from '../../../pages/LandingPage/NavBar'


const DefaultLayout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}

        </div>
    )
}

export default DefaultLayout