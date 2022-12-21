import Cart from "../components/cart/Cart";
import { auth } from "../Firebase";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";

const cart = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/Register");
      } else {
        setIsLoading(false);
      }
    });
  }, [onAuthStateChanged]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-56">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  return <Cart />;
};

export default cart;
