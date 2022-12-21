import { useSelector } from "react-redux";
const CartRight = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce((cur, item) => {
    return item.price * item.quantity + cur;
  }, 0);
  return (
    <div className="px-4 pt-8 bg-gray-100 pb-4 mb-4">
      <h3 className=" text-2xl font-Rajdhani mb-10">Summery</h3>
      <h3 className=" text-xs font-Rajdhani font-semibold mb-5">
        APPLY COUPON CODE
      </h3>
      <div className="relative mb-4">
        <input
          className="w-full border rounded-3xl bg-transparent py-2 px-4 "
          placeholder="COUPON CODE"
        />
        <div className="absolute right-0 top-2/4 -translate-y-1/2 mr-2 bg-indigo-900 py-2 px-4 text-white text-xs font-bold font-Quicksand rounded-3xl">
          APLLY
        </div>
      </div>
      <h3 className=" text-sm font-Rajdhani font-bold mb-3">CART TOTAL</h3>
      <div>
        <div>
          <div className=" flex justify-between items-center mb-2">
            <h3 className=" text-sm font-Rajdhani ">subtotal</h3>
            <h3 className=" text-sm font-Rajdhani font-bold ">QR{total}</h3>
          </div>
          <div className=" flex justify-between items-center border-b-2 pb-2">
            <h3 className=" text-sm font-Rajdhani text-lime-500">
              Coupon Applied
            </h3>
            <h3 className=" text-sm font-Rajdhani font-bold text-lime-500 ">
              200
            </h3>
          </div>
        </div>
        <div className=" flex justify-between items-center pt-2">
          <h3 className=" text-sm font-Rajdhani ">Total Price</h3>
          <h3 className=" text-xl font-Rajdhani font-bold ">QR{total - 200}</h3>
        </div>
      </div>
      <div className="w-full py-3 cursor-pointer hover:bg-lime-200 hover:text-lime-500 hover:border border-lime-500 flex justify-center items-center bg-lime-500 text-white font-bold font-Rajdhani rounded-lg mt-10">
        PROCEED TO CHECK OUT
      </div>
    </div>
  );
};

export default CartRight;
