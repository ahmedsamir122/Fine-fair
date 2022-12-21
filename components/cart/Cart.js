import CartLeft from "./CartLeft";
import CartRight from "./CartRight";
const Cart = () => {
  return (
    <section>
      <div className=" grid md:grid-cols-6 px-3 container mx-auto">
        <div className="pt-10 md:col-span-4">
          <CartLeft />
        </div>
        <div className="pt-10 md:col-span-2 ">
          <CartRight />
        </div>
      </div>
    </section>
  );
};

export default Cart;
