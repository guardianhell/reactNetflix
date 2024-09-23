import NavBar from '@/pages/Browse/NavBar'
import React from 'react'

const BrowseLayout = ({ children }) => {
    return (
        <>
            <NavBar />
            <div>
                {children}
            </div>
        </>
    )
}

export default BrowseLayout