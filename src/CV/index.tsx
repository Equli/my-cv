import './CV.scss'
import {Personal} from "../Personal";
import {Details} from "../Details";
import {Header} from "../Header";


const CV = () => {
    return <main className='cv-main'>
        <Header/>
        <Personal/>
        <Details/>
    </main>
}

export { CV }