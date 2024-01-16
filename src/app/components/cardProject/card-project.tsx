import { defaultImages } from "@/app/types/Constants"
import { ProjectType } from "@/app/types/Project"
import { Button, useDisclosure } from "@nextui-org/react"
import Link from "next/link"
import GalleryProject from "@/app/components/gallery/gallery-project";
import { myGalleryImages } from "@/app/types/User";

export default function CardProject(props: ProjectType) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const gallery = myGalleryImages.find(it => it.full_name === props.full_name)
    return (
        <div className={`
        card flex flex-col justify-between p-4 gap-2 rounded-lg border-2 border-zinc-500 w-full cursor-pointer hover:bg-gray-700 break-words
        sm:w-2/5 sm:gap-2
        lg:w-1/5
        `}>
            <div>
                <img src={"icones.svg"} alt="icon" />
            </div>
            <p className={`
            default-color text-base font-semibold
            `}>{props.name}</p>
            <p className={`
            text-sm font-color-secondary break-words
            `}>{props.description}</p>
            {
                props.homepage && <Link className={`
                text-sm
                `} target="_blank" rel="noopener noreferrer" href={props.homepage} >Testar</Link>
            }
            {
                props.html_url && <Link className={`
                text-sm
                `} target="_blank" rel="noopener noreferrer" href={props.html_url} >Código fonte</Link>
            }
            {
                props.image ?
                    (<div className={`flex items-center justify-center w-full max-w-full h-32`}>
                        <div className={`relative w-full max-w-full h-full max-h-full rounded-md`}>
                            <img className={`w-full max-w-full h-full max-h-full rounded-md`} src={props.image} alt="icon" />
                            {
                                gallery != undefined &&
                                (<><Button className={`dark absolute top-0 opacity-0  bg-[#191A1D] w-full max-w-full h-full max-h-full hover:opacity-75 transition-opacity ease-in-out delay-100 duration-300 rounded-md text-center`}
                                        onPress={onOpen}>Imagens</Button>
                                    <GalleryProject
                                        isOpen={isOpen}
                                        onOpen={onOpen}
                                        onOpenChange={onOpenChange}
                                        projectType={props}
                                        galleryImage={gallery} /></>)
                            }
                        </div>
                    </div>)
                    :
                    (<div className={`flex items-center justify-center w-full h-32 bg-slate-400 rounded-lg`}>
                        <img src={defaultImages.default_img_project} alt="icon" />
                    </div>)
            }
        </div>
    )
}