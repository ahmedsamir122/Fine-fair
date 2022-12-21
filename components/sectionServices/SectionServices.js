import Image from "next/image";
import img1 from "../../images/4.svg";
import img2 from "../../images/group-2950.svg";
import img3 from "../../images/group-2951.svg";
const SectionServices = () => {
  return (
    <section className="bg-green-50 border-t ">
      <div className="grid md:grid-cols-3 container md:w-full mx-auto ">
        <div className=" md:col-span-1 flex justify-between items-center py-3 px-5 border-b md:border-b-0 ">
          <div>
            <p>24x7 CUSTOMER</p>
            <p>SUPPORT</p>
          </div>
          <div>
            <Image src={img1} alt="" />
          </div>
        </div>
        <div className=" md:col-span-1 flex justify-between items-center py-3 px-5 md:border-l md:border-r border-b md:border-b-0">
          <div>
            <p>SAFE & SECURE</p>
            <p>PAYMENT</p>
          </div>
          <div>
            <Image src={img2} alt="" />
          </div>
        </div>
        <div className=" md:col-span-1 flex justify-between items-center py-3 px-5 ">
          <div>
            <p>FAST & RELIABLE</p>
            <p>DELIVERY</p>
          </div>
          <div>
            <Image src={img3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionServices;
