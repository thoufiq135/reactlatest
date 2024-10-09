import './colour.css'
function Card({names,desc,ig}){
    return(
        <>
        <div className='par'>
            <div className='mot'>
                <img src={ig}/>
                <h1 className='head2'>{names}</h1>
                <p>{desc}</p>
            </div>
        </div>

        </>
    )
    
}
export default Card