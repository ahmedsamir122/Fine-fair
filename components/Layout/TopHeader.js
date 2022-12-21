import Link from "next/link";
const TopHeader = () => {
  return (
    <div className="lg:flex justify-between px-3 pt-3 pb-3 hidden">
      <div className="flex">
        <Link
          href="/"
          className=" pr-4 border-r-2 font-Rajdhani text-xs  hover:text-green-200 cursor-pointer"
        >
          CALL : +974 12345678
        </Link>
        <Link
          href="/"
          className=" pl-4 font-Rajdhani text-xs  hover:text-green-200 cursor-pointer"
        >
          sales@finefair.qa
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/"
          className=" pr-4 font-Rajdhani text-xs hover:text-green-200 cursor-pointer"
        >
          Help Center
        </Link>
        <select className=" pl-4 pr-5 border-none text-xs active:outline-none focus:outline-none">
          <option value="english">English</option>
          <option value="arabic">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
