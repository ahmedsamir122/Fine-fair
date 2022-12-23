import React from "react";
import LeftSection from "../../components/shopPage/leftsection/LeftSection";
import RightSection from "../../components/shopPage/rightsection/RightSection";
export default function Shop() {
  return (
    <section>
      <div className="container mx-auto grid md:grid-cols-4 pt-10 pl-3">
        <div className=" md:col-span-1 md:pr-12 pr-3 border-r ">
          <LeftSection />
        </div>
        <div className=" md:col-span-3 mx-auto md:pl-10">
          <RightSection />
        </div>
      </div>
    </section>
  );
}
