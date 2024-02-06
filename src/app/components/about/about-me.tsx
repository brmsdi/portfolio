import { IconClipboardCheck, IconClipboardList, IconCode, IconDatabase, IconDeviceImac, IconMedal, IconMoodSmileDizzy } from "@tabler/icons-react";
import Life from "@/app/components/life/Life";
import LifeEnd from "@/app/components/lifeEnd/LifeAnd";
import LineAboutMe from "@/app/components/line/line-about-me";
import { UserFill } from "@/app/types/User";

export default function AboutMe() {
    const sizeIcone = 28
    function typeIcon(typeIcon: number) {
        switch (typeIcon) {
            case 1: return <IconMedal className={`text-green-400`} size={sizeIcone} />
            case 2: return <IconCode className={`text-blue-400`} size={sizeIcone} />
            case 3: return <IconClipboardCheck className={`text-yellow-400`} size={sizeIcone} />
            case 4: return <IconClipboardList className={`text-red-400`} size={sizeIcone} />
            case 5: return <IconDeviceImac className={`text-purple-400`} size={sizeIcone} />
            case 6: return <IconDatabase className={`text-zinc-400`} size={sizeIcone} />
            default: return <IconMoodSmileDizzy className={`text-green-400`} size={sizeIcone} />
        }
    }
    const specialties = UserFill.resume.map(item => <LineAboutMe Icon={typeIcon(item.typeIcon)} id={item.id} title={item.title} key={item.id} />)
    const lifeData = UserFill.life.map(item => <Life id={item.id} moment={item.moment} description={item.description} key={item.id} />)
    return (
        <section id={"aboutme"} className={`
        flex flex-col w-screen
        sm:px-10
        `}>
            <div className={`
            flex flex-col items-center justify-center w-full gap-8
            sm:flex-row sm:items-start sm:gap-20
            lg:gap-28
            `}>
                <img className={`
                    img-circle w-44 h-44 rounded-full overflow-hidden cursor-pointer
                    sm:w-56 sm:h-56
                    `} src={"/user_icon.png"} alt="Minha foto" />
                <div>
                    <div className={`
                    default-color bg-theme flex items-center justify-center gap-2 py-2 w-2/5 cursor-pointer
                    lg:w-2/6 lg:text-sm
                    `}>
                        <span><IconMoodSmileDizzy /></span>
                        <span>Sobre mim</span>
                    </div>
                    <div className={`
                    default-color text-lg my-6 font-bold
                    sm:text-xl
                    `}>
                        {UserFill.fullName}
                    </div>
                    <ul className={`
                    flex flex-col items-start gap-2 mb-8
                    `}>
                        {specialties}
                    </ul>
                </div>
            </div>
            <div>
                <div className={`
                bg-theme flex flex-col items-center justify-between my-2 w-1 gap-32 ms-4
                `}>
                    {lifeData}
                    <LifeEnd />
                </div>
            </div>
           
        </section>
    )
}