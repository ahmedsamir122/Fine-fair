import Image from "next/image";
import img from "../../../../images/Slider1_1366x.jpg";
const SectionPhoto = () => {
  return (
    <div className="mb-5 w-full">
      <Image alt="" src={img} className="w-full" />
    </div>
  );
};

export default SectionPhoto;
