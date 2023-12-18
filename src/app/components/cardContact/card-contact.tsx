import { Contact } from "@/app/types/Contact";
import Link from "next/link";

export default function CardContact(props: Contact) {
    return (
        <div key={props.id} className={`
        flex flex-col items-center gap-2 w-full 
        sm:w-2/5
        `}>
            <div>
                <img src={props.image} alt="icon" width={45} height={45} />
            </div>
            <div className={`default-color font-semibold text-xs`}>
                {props.title}
            </div>
            {
                props.link ? (
                    <Link className={`text-xs`} href={props.link} target="_blank" rel="noopener noreferrer">
                        {props.text}
                    </Link>
                ) : (
                    <p className={`font-color-secondary text-xs`} >{props.text}</p>
                )
            }
        </div>
    )
}