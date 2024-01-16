import { UserFill } from "@/app/types/User"

export default function InitialSection() {
    return (
        <section className={`
        flex flex-col gap-4 items-center justify-center
        h-screen md:w-5/5
        `}>
            <div className={`
            flex gap-2 font-semibold text-3xl tracking-wide
            `}>
                <span className={`
                font-color-primary`}>{UserFill.name}</span>
                <span className={`default-color`} >{UserFill.surname}</span>
            </div>
            <div className={`
            font-color-secondary text-base
            `}>
                <span>{UserFill.specialty}</span>
            </div>
            <a href="#aboutme" className={`font-color-primary border-theme py-2 px-10 relative rounded-md border-2 border-solid group overflow-hidden font-medium inline-block`}>
                <span className={`span-bg-theme absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 group-hover:h-full opacity-90`}></span>
                <span className={`relative group-hover:text-white`}>Sobre mim</span>
            </a>
        </section>
    )
}