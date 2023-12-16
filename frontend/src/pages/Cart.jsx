const Cart = ({ cartItems }) => {
  return (
    <div>
        {cartItems.length > 0
            ? <table>
                <thead>
                    <tr>
                        <th className="heading">Item</th>
                        <th className="heading">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.price} €</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="total">Total</td>
                        <td className="total">{cartItems.reduce((prev, curr) => prev + curr.price, 0)} €</td>
                    </tr>
                </tfoot>
            </table> 
            : <p>Cart is empty</p>
        }
    </div>
  )
}

export default Cart;