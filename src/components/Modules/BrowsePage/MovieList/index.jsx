import { LIST_VIDEOS } from '@/constants/dummyVideo'
import EachUtils from '@/utils/EachUtils'
import React, { useState } from 'react'
import MovieCard from '../MovieCard'
import CarouselLayout from '@/components/Layouts/CarouselLayout'

const MovieList = ({ title }) => {
    const [isHover, setHover] = useState(false)
    const [idMovie, setIdMovie] = useState(null)

    return (
        <section className='text-white py-4 px-8'>
            <h3 className='text-white text-3xl font-semibold mb-2'>{title}</h3>
            <CarouselLayout>
                <EachUtils
                    of={LIST_VIDEOS}
                    render={(item, index) => (
                        <div
                            className='carousel-item h-72 w-[25%] mt-4'
                            key={index}
                            onMouseLeave={() => {
                                setHover(false)
                                setIdMovie(null)
                            }}
                        >
                            <MovieCard data={item}
                                isHover={isHover}
                                idMovie={idMovie}
                                setHover={setHover}
                                setIdMovie={setIdMovie} />
                        </div>
                    )}
                />
            </CarouselLayout>
        </section>
    )
}

export default MovieList