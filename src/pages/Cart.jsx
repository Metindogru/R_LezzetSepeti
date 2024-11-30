import { useSelector } from "react-redux";
import OrderBox from "../componenets/OrderBox";
import CartItem from "../componenets/CartItem";
import Loader from "../componenets/Loader";
import Error from "../componenets/Error";
import Warning from "../componenets/Warning";

const Cart = () => {
  const { cart, error, isLoading } = useSelector((store) => store.cartReducer);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-4">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error info={error} />
          ) : cart.length === 0 ? (
            <Warning />
          ) : (
            cart.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        <OrderBox cart={cart} />
      </div>
    </div>
  );
};

export default Cart;
