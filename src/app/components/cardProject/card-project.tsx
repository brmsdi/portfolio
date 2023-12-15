import { Project } from "@/app/types/user"
import Link from "next/link"

export default function CardProject(props: Project) {
    return (
        <div className={`
        card flex flex-col p-4 gap-1 rounded-lg border-2 border-zinc-500 w-full cursor-pointer hover:bg-gray-700 break-words
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
                `} target="_blank" rel="noopener noreferrer" href={props.homepage} >{`${props.homepage}`}</Link> 
            }
            {
                props.html_url && <Link className={`
                text-sm
                `} target="_blank" rel="noopener noreferrer" href={props.html_url} >{`${props.html_url}`}</Link>
            }
            {
                props.image ? <div className={`
                flex items-center justify-center w-full h-32
                `}>
                    <img src={"next.svg"} alt="icon" />
                </div> 
                :
                <div className={`
                flex items-center justify-center w-full h-32 bg-slate-400 rounded-lg
                `}>
                    <img src={"github-original-wordmark.svg"} alt="icon" />
                </div> 
            }
        </div>
    )
}