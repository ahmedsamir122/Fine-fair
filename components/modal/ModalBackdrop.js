import { useState, useEffect } from "react";
import ReactDom from "react-dom";
import Image from "next/image";
import img1 from "../../images/logo.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function ModalBackdrop({ show, onClose, children }) {
  const router = useRouter();
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
        <div
          className=" w-screen h-screen fixed top-0   backdrop-blur-md z-10 "
          onClick={handleClose}
        ></div>
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
