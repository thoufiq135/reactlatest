import './colour.css'
function Cards({names},{desc},{ig}){
    <>
    <h1>All The Cards are here</h1>
    <div className='con1'>
    <div className='par'>
        <div className='mot'>
            <img src={ig}/>
            <h1>{names}</h1>
            <p>{desc}</p>
        </div>
    </div>
    </div>
    </>
}
export default Cards