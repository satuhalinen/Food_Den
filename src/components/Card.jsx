import 'react-multi-carousel/lib/styles.css';

function Card(props) {
  return (
    <div className='card'>   
      <img className='image' src={props.url} alt='img1'/>
      <h3 className='name'>{props.name}</h3>
      <p className='description'>{props.description}</p>
      <p className='price'>{props.price} €</p>
      <button onClick={() => props.addToCart()}>Add to cart</button>
    </div>    
  );
}
export default Card;
