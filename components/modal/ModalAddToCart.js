import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { Fragment } from "react";

export default function ModalAddToCart({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const routerHandler = () => {
    router.push("/");
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <Fragment>
      {show ? (
        <div className=" bg-white fixed z-10 top-5 right-7 ">
          <div className=" flex items-center p-4">
            <AiOutlineCheckCircle className=" text-green-700" />
            <p>New Item is Added</p>
          </div>
          <motion.div
            className=" bg-green-700 w-full h-1"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: "2" }}
          ></motion.div>
        </div>
      ) : null}
    </Fragment>
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
