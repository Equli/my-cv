import "./Header.scss"
import {CVPersonal} from "../types.ts";

type Props = {
    data: CVPersonal
}

const Header = ({data: {name, lastName}}: Props) => {
    return <header className='cv-header'>
        <h1>CV {name} {lastName}</h1>
    </header>
}

export { Header }