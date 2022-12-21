import { useSelector } from "react-redux";

const CartTitleLeft = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className=" border-b-2 pb-3">
      {cart.length > 0 && (
        <div className="flex justify-between items-center">
          <h2 className=" text-xs font-semibold">Products</h2>
          <div className="flex text-xs font-semibold lg:gap-28 md:gap-16 gap-5 ">
            <h3>PRICE</h3>
            <h3>QUANTITY</h3>
            <h3>TOTAL</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartTitleLeft;
