import { createRoot } from 'react-dom/client'
import Cards from './Nav';
import './colour.css';
let data=[ 
  {name:"Card1",des:"this is the description of card1",iag:"https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
  {name:"Card2",des:"this is the description of card2",iag:'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card3",des:"this is the description of card3",iag:'https://images.pexels.com/photos/337909/pexels-photo-337909.jpeg?auto=compress&cs=tinysrgb&w=400'},
  {name:"Card4",des:"this is the description of card4",iag:'https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card5",des:"this is the description of card5",iag:'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card6",des:"this is the description of card6",iag:'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card7",des:"this is the description of card7",iag:'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card8",des:"this is the description of card8",iag:'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card9",des:"this is the description of card9",iag:'https://images.pexels.com/photos/38637/car-audi-auto-automotive-38637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card10",des:"this is the description of card10",iag:'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card11",des:"this is the description of card11",iag:'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  {name:"Card12",des:"this is the description of card12",iag:'https://images.pexels.com/photos/1191109/pexels-photo-1191109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
]


createRoot(document.getElementById('root')).render(
  <>
  <h1 className='head1'>These are the cards</h1>
  <div className='con1'>
  <Cards names={data[0].name} desc={data[0].des} ig={data[0].iag}/>
  <Cards names={data[1].name} desc={data[1].des} ig={data[1].iag}/>
  <Cards names={data[2].name} desc={data[2].des} ig={data[2].iag}/>
  <Cards names={data[3].name} desc={data[3].des} ig={data[3].iag}/>
  <Cards names={data[4].name} desc={data[4].des} ig={data[4].iag}/>
  <Cards names={data[5].name} desc={data[5].des} ig={data[5].iag}/>
  <Cards names={data[6].name} desc={data[6].des} ig={data[6].iag}/>
  <Cards names={data[7].name} desc={data[7].des} ig={data[7].iag}/>
  <Cards names={data[8].name} desc={data[8].des} ig={data[8].iag}/>
  <Cards names={data[9].name} desc={data[9].des} ig={data[9].iag}/>
  <Cards names={data[10].name} desc={data[10].des} ig={data[10].iag}/>
  <Cards names={data[11].name} desc={data[11].des} ig={data[11].iag}/>
  </div>
  

  </>
)
