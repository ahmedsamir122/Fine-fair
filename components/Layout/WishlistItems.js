import { useSelector } from "react-redux";
import WishlistItem from "./WishlistItem";

const WishlistItems = (props) => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  console.log(wishlist);
  return (
    <div className="absolute bg-white z-10 w-64 p-3 h-64 overflow-y-auto border right-0">
      {wishlist.length > 0 && (
        <div>
          <div className=" font-extrabold text-lime-600 font-Quicksand pb-3 mb-3 border-b-2">
            Items (<span>{wishlist.length}</span>)
          </div>
          <div>
            {wishlist.map((item) => (
              <WishlistItem
                title={item.title}
                img={item.img}
                id={item.id}
                key={item.id}
              />
            ))}
          </div>
        </div>
      )}
      {wishlist.length === 0 && (
        <h2 className=" flex items-center justify-center h-full w-full text-lg font-Quicksand font-semibold text-lime-600">
          Your Wishlist is empty
        </h2>
      )}
    </div>
  );
};

export default WishlistItems;
