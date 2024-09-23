import React from 'react'
import SectionLayout from '@layouts/SectionLayout'
import EachUtils from '@/utils/EachUtils'
import { languageAtom } from '@/jotai/atoms'
import { LIST_CONTENT_ID_1, LIST_CONTENT_EN_1 } from '@/constants/listContent'
import { useAtom } from 'jotai'
import { ENJOY_TV_IMAGE, ENJOY_TV_VIDEO } from '@/constants/listAsset'

const SectionEnjoy = () => {
    const [language] = useAtom(languageAtom)
    console.log("INI" + language);
    return (

        <SectionLayout >
            <EachUtils
                of={language == "en" ? LIST_CONTENT_EN_1 : LIST_CONTENT_ID_1}
                render={(item, index) => (
                    <div key={index} className='px-1'>
                        <h2 className='font-black text-5xl text-white'>{item.title}</h2>
                        <p className='text-xl mt-4 text-white'>{item.description}</p>
                    </div>
                )}
            />
            <div className='relative max-w-xl mx-auto'>
                <img src={ENJOY_TV_IMAGE} alt='' className='relative z-10'></img>
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[73%]'>
                    <video autoPlay muted loop>
                        <source src={ENJOY_TV_VIDEO} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </SectionLayout>

    )
}

export default SectionEnjoy