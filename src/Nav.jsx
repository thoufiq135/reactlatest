import './colour.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPepperHot} from '@fortawesome/free-solid-svg-icons'
function Nav() {
    return(
        <div className="con1">
            <div className="logo"><FontAwesomeIcon icon={faPepperHot} /></div>
            <div className="opt">
                <div className="home">HOME</div>
                <div className="about">About US</div>
                <div className="cat">Category</div>
            </div>
        </div>
    )
}
export default Nav