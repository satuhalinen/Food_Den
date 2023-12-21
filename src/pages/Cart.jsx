const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cartClass">
      {cartItems.length > 0 ? (
        <div className="innerCartClass">
          <h3 className="cartParagraph">
            Thanks for your patronage. Here&apos;s a summary of your order:
          </h3>
          <table>
            <thead>
              <tr>
                <th className="heading"></th>
                <th className="heading">Item</th>
                <th className="heading">Price</th>
                <th className="heading">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, i) => (
                <tr key={i}>
                  <td>
                    <div
                      className="orderFigure"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} €</td>
                  <td>
                    <button onClick={() => removeFromCart(i)}>-</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="total"></td>
                <td className="total">Total</td>
                <td className="total">
                  {cartItems.reduce((prev, curr) => prev + curr.price, 0)} €
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      ) : (
        <h3 className="cartEmptyClass">Cart is empty.</h3>
      )}
    </div>
  );
};

export default Cart;
