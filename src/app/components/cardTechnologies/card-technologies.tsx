import { Technology } from "@/app/types/Technology"

export default function CardTechnologies(props: Technology) {
    return (
        <div className={`
        card flex flex-col p-4 gap-3 rounded-lg border-2 border-zinc-500 w-full cursor-pointer hover:bg-gray-700
        sm:w-2/5 sm:gap-1
        lg:w-1/5
        `}>
            <div>
            <img src={"icones.svg"} alt="icon" />
            </div>
            <div className={`
            flex items-center justify-center
            `}>
                <img src={props.image} alt="icon" />
            </div>
            <p className={`default-color text-center font-semibold text-base`} >{props.title}</p>
            <p className={`text-sm font-color-secondary break-words`}>{props.description}</p>
        </div>
    )
}
