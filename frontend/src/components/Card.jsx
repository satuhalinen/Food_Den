
import 'react-multi-carousel/lib/styles.css';

function Card(props) {
  return (

    <div className='card'>
           
            <img className='image' src={props.url} alt='img1'/>
            <h2 className='name'>{props.name}</h2>
            <p className='description'>{props.description}</p>
            <p className='price'>{props.price}</p>
            <p>
            <button>Add to cart</button>
            </p>
        </div>
        
  );
}
export default Card;
