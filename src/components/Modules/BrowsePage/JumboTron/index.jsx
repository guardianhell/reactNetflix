import { JUMBOTRON_VIDEO } from '@/constants/dummyVideo'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { GoPlay, GoMute, GoUnmute } from 'react-icons/go'

const Jumbotron = () => {
    const [isMute, setMute] = useState(true)

    return (
        <div className='relative top-0 left-0 h-[60vw] w-full'>
            <ReactPlayer
                width={"100%"}
                height={"100%"}
                playing={true}
                muted={isMute}
                controls={false}
                url={JUMBOTRON_VIDEO.videoURL} />
            <div className='absolute top-1/2 -translate-y-1/2 left-0 p-8 max-w-md'>
                <div className='flex flex-col gap-4 text-white'>
                    <h1 className='text-5xl font-black text-white'>{JUMBOTRON_VIDEO.title}</h1>
                    <p className='text-white text-xl'>{JUMBOTRON_VIDEO.desc}</p>
                </div>
                <div className='flex gap-4 mt-4'>
                    <button className='bg-gray-200 py-2 px-8 rounded-md text-xl text-black font-bold flex items-center gap-1'><GoPlay />Play</button>
                    <button className='bg-stone-600/80 py-2 px-8 rounded-md text-white'>More Detail</button>
                </div>
            </div>
            <div className='absolute right-5 bottom-1/2 -translate-y-1/2 text-white'>
                <div
                    onClick={() => {
                        setMute(!isMute)
                    }
                    }
                    className='border rounded-full p-2 cursor-pointer text-white'>
                    {isMute ? <GoMute className='text-white' size={24} /> : <GoUnmute className='text-white' size={24} />}
                </div>
            </div>
        </div >
    )
}

export default Jumbotron