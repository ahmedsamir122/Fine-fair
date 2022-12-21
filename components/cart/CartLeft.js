import CartTopLeft from "./CartTopLeft";
import CartTitleLeft from "./CartTitleLeft";
import CartItemsLeft from "./CartItemsLeft";

const CartLeft = () => {
  return (
    <div className=" md:pr-10 pr-2">
      <CartTopLeft />
      <CartTitleLeft />
      <CartItemsLeft />
    </div>
  );
};

export default CartLeft;
