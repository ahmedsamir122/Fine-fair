import LeftProductOne from "./LeftProductOne";
import RightProductOne from "./RightProductOne";
const ProductOne = (props) => {
  console.log("product one", props.data.data);
  return (
    <div>
      <div className="container mx-auto lg:grid lg:grid-cols-2 pt-5">
        <LeftProductOne data={props.data.data} />
        <RightProductOne data={props.data.data} />
      </div>
    </div>
  );
};

export default ProductOne;
