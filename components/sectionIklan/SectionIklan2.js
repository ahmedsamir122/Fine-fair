import Image from "next/image";
import img1 from "../../images/ad-2.jpg";
import img2 from "../../images/ad-1.jpg";
import classes from "../sectionPhotos/SectionPhotos.module.css";
import { useRouter } from "next/router";
const SectionIklan2 = () => {
  const router = useRouter();
  return (
    <section>
      <div
        onClick={() => router.push("/shop")}
        className="container mx-auto mb-2 mt-12"
      >
        <div
          className={`relative ${classes.main} overflow-hidden rounded-2xl cursor-pointer`}
        >
          <Image
            src={img1}
            alt="iklan"
            className="mb-2 hover:scale-110 transition ease-linear duration-200"
          />
          <div className={classes.flash}></div>
        </div>
        <div
          onClick={() => router.push("/shop")}
          className={`relative ${classes.main} overflow-hidden rounded-2xl cursor-pointer`}
        >
          <Image
            src={img2}
            alt="iklan"
            className="hover:scale-110 transition ease-linear duration-200"
          />
          <div className={classes.flash}></div>
        </div>
      </div>
    </section>
  );
};

export default SectionIklan2;
