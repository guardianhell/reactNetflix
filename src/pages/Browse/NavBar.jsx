import InputSearchMovies from '@mods/BrowsePage/InputSearchMovies/Index'
import { LIST_NAVBAR } from '@/constants/listNavBar'
import EachUtils from '@/utils/EachUtils'
import React from 'react'
import AccountMenu from '@/components/Modules/BrowsePage/AccountMenu'

const NavBar = () => {
    return (
        <header className='relative'>
            <nav className='bg-transparent fixed top-0 left-0 px-8 w-full z-10 text-black'>
                <div className='flex justify-between items-center'>
                    <div className='flex item-center gap-4'>
                        {/*sebelah kiri Nav*/}
                        <img src="netflix-logo-icon.png"
                            className='w-[120px] ml-2'
                        />

                        <ul className='sm:flex hidden items-center gap-4'>
                            <EachUtils
                                of={LIST_NAVBAR}
                                render={(item, index) => (
                                    <li key={index}>
                                        <a href={item.url}>{item.title}</a>
                                    </li>
                                )}
                            />
                        </ul>

                    </div>
                    <div className='flex items-center gap-4'>
                        <InputSearchMovies />
                        <AccountMenu />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar