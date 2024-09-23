import React from 'react'
import SectionLayout from '@layouts/SectionLayout'
import { PROFILE_KIDS_IMAGE } from '@/constants/listAsset'
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'
import { LIST_CONTENT_EN_4, LIST_CONTENT_ID_4 } from '@/constants/listContent'

const SectionKids = () => {

    const [language] = useAtom(languageAtom)

    return (
        <SectionLayout>
            <div>
                <img src={PROFILE_KIDS_IMAGE} alt=''></img>
            </div>
            <EachUtils
                of={language == 'en' ? LIST_CONTENT_EN_4 : LIST_CONTENT_ID_4}
                render={(item, index) => (
                    <div key={index}>
                        <h2 className='text-4xl font-black text-white'>{item.title}</h2>
                        <p className='text-xl mt-4 text-white'>{item.description}</p>
                    </div>
                )}
            />
        </SectionLayout>
    )
}

export default SectionKids