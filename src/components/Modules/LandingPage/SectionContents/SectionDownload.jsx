import React from 'react'
import SectionLayout from '@layouts/SectionLayout'
import { DOWNLOAD_COVER_IMAGE, DOWNLOAD_PHONE_IMAGE } from '@/constants/listAsset'
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'
import { LIST_CONTENT_EN_2, LIST_CONTENT_ID_2 } from '@/constants/listContent'

const SectionDownload = () => {

    const [language] = useAtom(languageAtom)
    return (
        <SectionLayout>
            <div className='relative max-w-xl mx-auto'>
                <img src={DOWNLOAD_PHONE_IMAGE} alt=''></img>
                <div className='absolute bottom-8 left-0 left-1/2 -translate-x-1/2 bg-black border border-white flex items-center w-[60%] gap-4  text-white rounded-xl py-2 px-4'>
                    <img src={DOWNLOAD_COVER_IMAGE} alt='' className='max-h-20'></img>
                    <div className='flex flex-col text-left'>
                        <p className='text-white font-bold'>Stranger Things</p>
                        <p className='text-blue-400 font-semibold'>Download...</p>
                    </div>
                </div>
            </div>
            <EachUtils
                of={language == "en" ? LIST_CONTENT_EN_2 : LIST_CONTENT_ID_2}
                render={(item, index) => (
                    <div key={index}>
                        <h2 className='text-5xl text-white font-black'>{item.title}</h2>
                        <p className='text-xl mt-4 text-white'>{item.description}</p>
                    </div>

                )}
            />
        </SectionLayout>
    )
}

export default SectionDownload