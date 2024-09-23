import React from 'react'
import { JUMBOTRON_IMAGE } from '@/constants/listAsset'
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'
import { LIST_JUMBOTRON_EN, LIST_JUMBOTRON_ID } from '@/constants/listJumboTron'
import InputMembership from '../InputMembership'

const JumboTron = () => {

    const [language] = useAtom(languageAtom)
    console.log(language);
    return (
        <div className='mb-24 px-8'>
            <img className='absolute top-0 left-0 object-cover h-[700px] w-full' src={JUMBOTRON_IMAGE} alt='' />
            <EachUtils
                of={language == 'en' ? LIST_JUMBOTRON_EN : LIST_JUMBOTRON_ID} render={(item, index) => (
                    <div key={index} className='relative flex flex-col justify-center items-center mt-44 gap-4 text-center px-4'>
                        <h1 className='font-black text-white text-5xl'>{item.title}</h1>
                        <p className='text-white text-xl'>{item.desc}</p>
                        <InputMembership />
                    </div>)}
            />

        </div>
    )
}

export default JumboTron