import CardContact from "@/app/components/cardContact/card-contact";
import { UserFill } from "@/app/types/user";

export default function ContactSection() {
    const data = UserFill.contacts.map(item => {
        return <CardContact
            id={item.id}
            title={item.title}
            text={item.text}
            link={item.link}
            image={item.image} 
            key={item.id}/>
    })
    return (
        <section className={`
        flex flex-col w-screen gap-10
        sm:px-10
        `}>
            <h1 className={`font-bold text-xl`}>Onde me encontrar</h1>
            <div className={`flex flex-wrap justify-center gap-8
            sm:justify-evenly
            `} >
                {data}
            </div>
        </section>
    )
}