import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome'
import '../components/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="icon-set">
                <a className='icons' href='https://myfavcoffeeplace.io'>
                    <FontAwesomeIcon color={'black'} className="icon" icon={['fab', 'instagram']} />
                </a>
                <a className='icons' href='https://myfavcoffeeplace.io'>
                    <FontAwesomeIcon color={'black'} className="icon" icon={['fab', 'linkedin']} />
                </a>
            </div>
        </footer>
    )
}

export default Footer