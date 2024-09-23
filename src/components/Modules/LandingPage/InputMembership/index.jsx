import React from 'react'
import EachUtils from '@/utils/EachUtils'
import { useAtom } from 'jotai'
import { languageAtom } from '@/jotai/atoms'
import { LIST_CTA_EN, LIST_CTA_ID } from '@/constants/listCTA'
import DefaultButton from '../DefaultButton'

const InputMembership = () => {

    const [language] = useAtom(languageAtom)
    return (
        <form>
            <EachUtils
                of={language == 'en' ? LIST_CTA_EN : LIST_CTA_ID} render={(item, index) => (
                    <div key={index}>
                        <h3 className='text-white text-xl'>{item.title}</h3>
                        <div className='relative flex justify-center items-center gap-2 py-4'>
                            <input className='p-4 bg-black/50 rounded-md border border-white/50 peer placeholder-transparent w-full' placeholder={item.email} />
                            <label className='absolute top-0 left-0 pl-4 peer-placeholder-shown:top-8 peer-focus:top-[16px] transition-all text-lg'>{item.email}</label>
                            <DefaultButton onClick={() => console.log("REGISTER")} text={item.button} isArrowIcon={true} styles={'flex py-4 w-1/2 flex justify-center items-cente gap-2 text-xl'} />
                        </div>

                    </div>
                )}
            />
        </form>
    )
}

export default InputMembership