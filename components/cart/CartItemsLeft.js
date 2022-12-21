import { useSelector } from "react-redux";
import CartItemLeft from "./CartItemLeft";
import { Fragment } from "react";
import CartLeftButton from "./CartLeftButton";
import CartEmpty from "./CartEmpty";

const CartItemsLeft = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Fragment>
      <div className="h-80 overflow-auto pt-3">
        {cart.length > 0 && cart.map((item) => <CartItemLeft item={item} />)}
        {cart.length === 0 && <CartEmpty />}
      </div>
      <div className="my-5">{cart.length > 0 && <CartLeftButton />}</div>
    </Fragment>
  );
};

export default CartItemsLeft;
