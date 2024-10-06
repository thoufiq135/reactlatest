import './colour.css';
import {Data} from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPepperHot,faCartShopping} from '@fortawesome/free-solid-svg-icons'
let item1;
let item2;
let item3;
let item4;
let item5;
let item6;
function controler(){
    item1=<div>Hi</div>   
}
controler()

function List(){
    return(
        <div className='con3'>
            <h1>Cart<FontAwesomeIcon icon={faCartShopping} /></h1>     
            <div className='sel'>
                {item1}
            </div>

        </div>
        
        
        
    )
}
export default List