import pic from './assets/wall.jpg'

function Card (){

return(
<div className="card"> 
<img className='picture' src={pic}></img>
<h2>Energy Cubes</h2>
<p>Detailed description of the service provided here</p>
</div>

);

}

export default Card