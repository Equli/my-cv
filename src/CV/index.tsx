import './CV.scss'
import {Personal} from "../Personal";
import {Details} from "../Details";
import {Header} from "../Header";
import {CVData} from "../types.ts";


const CV = () => {
    const cvData: CVData = {
        personal: {
            photo: 'https://placehold.co/400x400',
            name: 'Maciej',
            lastName: 'Tomaszewski',
            position: 'Developer',
        },
        details: {
        experience: [{
            year: 2020,
            description:  "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        },{
            year: 2023,
            description: "Ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        }],
        education: [
            "Wyższa szkoła",
        ]
        }
    }
    return <main className='cv-main'>
        <Header data={cvData.personal}/>
        <Personal data={cvData.personal}/>
        <Details data={cvData.details}/>
    </main>
}

export { CV }