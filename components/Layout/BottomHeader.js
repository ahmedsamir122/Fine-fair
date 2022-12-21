import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";
import classes from "./BottomHeader.module.css";
import { useRouter } from "next/router";
const BottomHeader = () => {
  const router = useRouter();

  const routerHandler = () => {
    router.push("/shop");
  };

  return (
    <div className="lg:flex justify-between mt-2 bg-lime-500 px-5 h-14 text-white whitespace-nowrap hidden">
      <div className="flex items-center bg-lime-400 h-full px-3">
        <AiOutlineMenu />
        <p className=" text-sm font-bold px-4 uppercase">all categories</p>
        <IoIosArrowDown />
      </div>
      <div className="flex items-center uppercase  ">
        <div
          onClick={routerHandler}
          className={`${classes.navIcon} relative ml-3 px-3 text-xs font-semibold hover:bg-lime-400 h-14 flex justify-center items-center cursor-pointer`}
        >
          mobiles
          <ul
            className={`${classes.mobiles} list-none absolute top-full z-10 bg-white text-black  hidden`}
          >
            <li
              className={`${classes.samsung} pb-2 pt-2 text-sm pr-8 pl-5 mt-4 text-zinc-500 hover:bg-lime-500 relative`}
            >
              <Link href="/shop">Samsung</Link>
              <ul
                className={`${classes.samsungs} absolute left-full top-0 bg-white z-10 pt-4 pb-4 hidden`}
              >
                <li>
                  <Link
                    href="/shop"
                    className="pl-3 pr-10 pt-2 pb-2 flex items-center justify-start hover:bg-lime-500 text-sm"
                  >
                    Samsung 1
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="pl-3 pr-10 pt-2 pb-2 flex items-center justify-start hover:bg-lime-500 text-sm"
                  >
                    Samsung 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="pl-3 pr-10 pt-2 pb-2 flex items-center justify-start hover:bg-lime-500 text-sm"
                  >
                    Samsung 3
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="pl-3 pr-10 pt-2 pb-2 flex items-center justify-start hover:bg-lime-500 text-sm"
                  >
                    Samsung 4
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="pl-3 pr-10 pt-2 pb-2 flex items-center justify-start hover:bg-lime-500 text-sm"
                  >
                    Samsung 5
                  </Link>
                </li>
              </ul>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Apple</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Hisence</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Oneplus</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Nokia</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Oppo</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Poco</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Vivo</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Xiomi</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Realme</Link>
            </li>
            <li className="pb-2 pt-2 text-sm pr-8 pl-5 text-zinc-500  hover:bg-lime-500">
              <Link href="/shop">Accessories</Link>
            </li>
          </ul>
        </div>
        <p
          onClick={routerHandler}
          className=" ml-3 px-3 text-xs font-semibold hover:bg-lime-400 h-14 flex justify-center items-center cursor-pointer"
        >
          accessories
        </p>
        <p
          onClick={routerHandler}
          className=" ml-3 px-3 text-xs font-semibold hover:bg-lime-400 h-14 flex justify-center items-center cursor-pointer"
        >
          tablets
        </p>
        <p
          onClick={routerHandler}
          className=" ml-3 px-3 text-xs font-semibold hover:bg-lime-400 h-14 flex justify-center items-center cursor-pointer"
        >
          gaming
        </p>
        <p
          onClick={routerHandler}
          className=" ml-3 px-3 text-xs font-semibold hover:bg-lime-400 h-14 flex justify-center items-center cursor-pointer"
        >
          laptop
        </p>
        <p
          onClick={routerHandler}
          className=" ml-3 px-3 text-xs font-semibold hover:bg-lime-400 h-14 flex justify-center items-center cursor-pointer"
        >
          watches
        </p>
      </div>
      <div className="flex items-center h-14">
        <button className="flex items-center   mr-4 rounded-full border px-3 py-2 whitespace-nowrap hover:bg-blue-900 transition ease-linear">
          <p className="text-xs uppercase">view all</p>
          <HiOutlineArrowNarrowRight className="ml-4" />
        </button>
      </div>
    </div>
  );
};

export default BottomHeader;
