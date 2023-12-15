interface IProps {
    id: number,
    Icon: JSX.Element,
    title: string
}
export default function LineAboutMe(props: IProps) {
    return <li key={props.id} className={`
    flex font-color-secondary gap-2 text-sm
    `}>{props.Icon}{props.title}</li>
}