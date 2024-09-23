import React, { useState } from 'react'
import { GoSearch } from "react-icons/go"
import { motion } from "framer-motion"

const InputSearchMovies = () => {

    const [isShow, setIsShow] = useState(false)
    return (
        <div className='relative'>
            <motion.input
                initial={{ translateX: -20 }}
                animate={{ translateX: isShow ? 0 : -20 }}
                className='bg-black py-2 pl-12'
                style={{ display: isShow == true ? "block" : "none" }}
                placeholder='title, people, genres...' />
            <GoSearch
                onClick={() => setIsShow(!isShow)}
                className={isShow ? "absolute top-1/2 -translate-y-1/2 left-3 z-10" : null}
                size={24} />
        </div>
    )
}

export default InputSearchMovies