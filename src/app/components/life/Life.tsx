
interface IProps {
    id: number,
    moment: string,
    description: string
}
export default function Life(props: IProps) {
    return (
        <div key={props.id} className={`
        circle-bg border-theme flex rounded-full border-solid border-4 p-0 w-6 h-6
        `}>
            <div className={`
            text-left absolute w-10/12 ms-8 text-xs
            md:text-sm
            `}>
                <span className={`default-color font-bold`} >{props.moment}</span>
                <p className={`font-color-secondary break-words`}>{props.description}</p>
            </div>
        </div>
    )
}