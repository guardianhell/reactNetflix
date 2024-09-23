import React from "react"
import SectionLayout from "@/components/Layouts/SectionLayout"
import EachUtils from "@/utils/EachUtils"
import { languageAtom } from "@/jotai/atoms"
import { useAtom } from "jotai"
import { LIST_CONTENT_EN_3, LIST_CONTENT_ID_3 } from "@/constants/listContent"
import { WATCH_DEVICE_IMAGE, WATCH_DEVICE_VIDEO } from "@/constants/listAsset"

const SectionWatch = () => {

    const [language] = useAtom(languageAtom)
    return (
        <SectionLayout>
            <EachUtils
                of={language == "en" ? LIST_CONTENT_EN_3 : LIST_CONTENT_ID_3}
                render={(item, index) => (
                    <div key={index} className='px-8'>
                        <h2 className='font-bold text-white text-5xl'>
                            {item.title}
                        </h2>
                        <p className='text-white text-xl mt-4'>{item.description}</p>
                    </div>
                )}
            />
            <div className="relative max-w-xl mx-auto">
                <img className='relative z-10' src={WATCH_DEVICE_IMAGE} alt=''></img>
                <div className='absolute w-[60%] top-10 left-1/2 -translate-x-1/2'>
                    <video autoPlay loop muted>
                        <source src={WATCH_DEVICE_VIDEO} type='video/mp4'></source>
                    </video>
                </div>
            </div>


        </SectionLayout>
    )
}

export default SectionWatch