import { UserFill } from "@/app/types/User";
import CardTechnologies from "@/app/components/cardTechnologies/card-technologies"

export default function TechnologiesSection() {
    const data = UserFill.technologies.map(item => {
        return <CardTechnologies
            {...item}
            key={item.id} />
    })
    return (
        <section className={`
        flex flex-col w-screen gap-6
        sm:px-10
        `}>
            <h1 className={`font-bold text-xl`} >Tacnologias e habilidades</h1>
            <div className={`flex flex-wrap justify-center gap-8
            sm:justify-evenly
            `} >
                {data}
            </div>
        </section>
    )
}