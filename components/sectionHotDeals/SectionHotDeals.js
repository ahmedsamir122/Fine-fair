import HotDealsSlider from "./SliderHotDeals";
const SectionHotDeals = () => {
  return (
    <section className="py-10 mt-10 bg-orange-50">
      <h3 className="text-center mb-4 text-4xl font-semibold">Hot Deals</h3>
      <div className="container mx-auto">
        <HotDealsSlider />
      </div>
    </section>
  );
};

export default SectionHotDeals;
