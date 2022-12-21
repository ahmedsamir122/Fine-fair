import Image from "next/image";
import { wishlistActions } from "../../store/wishlist";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
const WishlistItem = (props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const removeItemHandler = () => {
    dispatch(wishlistActions.removeItemWishlist({ id: props.id }));
  };

  const showDetailHandler = () => {
    router.push("/shop/" + props.id);
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <div onClick={showDetailHandler} className="flex items-center">
        <div className=" relative w-10 h-10">
          <Image
            src={props.img}
            alt=""
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </div>
        <div className="text-sm font-Rajdhani font-bold pl-2">
          {props.title}
        </div>
      </div>
      <div onClick={removeItemHandler}>X</div>
    </div>
  );
};

export default WishlistItem;
