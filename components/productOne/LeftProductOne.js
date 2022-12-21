import ProductLeftSlider from "./ProductLeftSlider";
const LeftProductOne = (props) => {
  return (
    <div className="lg:col-span-1 ">
      <ProductLeftSlider data={props.data} />
    </div>
  );
};

export default LeftProductOne;
