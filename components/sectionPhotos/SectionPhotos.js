import Image from "next/image";
import img1 from "../../images/samsung-watch.jpg";
import img2 from "../../images/s1pro.jpg";
import classes from "./SectionPhotos.module.css";
import { useRouter } from "next/router";
const SectionPhotos = () => {
  const router = useRouter();
  return (
    <section className="mt-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-5 ">
        <div
          onClick={() => router.push("/shop")}
          className={` md:col-span-1 rounded-2xl overflow-hidden relative ${classes.main} cursor-pointer`}
        >
          <Image
            src={img1}
            alt="iklan"
            className="w-full  hover:scale-110 transition ease-linear duration-200"
          />
          <div className={classes.flash}></div>
        </div>
        <div
          onClick={() => router.push("/shop")}
          className={` md:col-span-1 rounded-2xl overflow-hidden relative ${classes.main} cursor-pointer`}
        >
          <Image
            src={img2}
            alt="iklan"
            className="w-full  hover:scale-110 transition ease-linear duration-200"
          />
          <div className={classes.flash}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionPhotos;
