import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import img1 from "../../images/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Modal({ show, onClose, children }) {
  const router = useRouter();
  const [isBrowser, setIsBrowser] = useState(false);

  const routerHandler = () => {
    router.push("/");
    onClose();
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleCloseItems = (e) => {
    e.preventDefault();
    router.push("/shop");
    onClose();
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ type: "tween", duration: 0.7 }}
          exit={{ x: -500 }}
          className=" bg-white z-20 pt-4 fixed h-screen top-0 w-1/2"
        >
          <div className="flex justify-between items-center w-full pb-8 px-4">
            <div onClick={routerHandler} className=" cursor-pointer">
              <Image className="w-full" src={img1} alt="" />
            </div>
            <div className="cursor-pointer text-xl" onClick={handleClose}>
              X
            </div>
          </div>
          <Link
            href="/shop"
            className="px-4 py-4 border-b hover:bg-lime-500 transition ease-linear block"
            onClick={handleCloseItems}
          >
            MOBILES
          </Link>
          <Link
            href="/shop"
            className="px-4 py-4 border-b hover:bg-lime-500 transition ease-linear block"
            onClick={handleCloseItems}
          >
            ACCESSORIES
          </Link>
          <Link
            href="/shop"
            className="px-4 py-4 border-b hover:bg-lime-500 transition ease-linear block"
            onClick={handleCloseItems}
          >
            TABLETS
          </Link>
          <Link
            href="/shop"
            className="px-4 py-4 border-b hover:bg-lime-500 transition ease-linear block"
            onClick={handleCloseItems}
          >
            GAMING
          </Link>
          <Link
            href="/shop"
            className="px-4 py-4 border-b hover:bg-lime-500 transition ease-linear block"
            onClick={handleCloseItems}
          >
            LAPTOPS
          </Link>
          <Link
            href="/shop"
            className="px-4 py-4 border-b hover:bg-lime-500 transition ease-linear block"
            onClick={handleCloseItems}
          >
            WATCHES
          </Link>
        </motion.div>
      ) : // </motion.div>
      null}
    </AnimatePresence>
  );
  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
}
