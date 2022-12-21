import RightProductDetail from "./RightProductDetail";
const RightProductOne = (props) => {
  return (
    <div className=" lg:col-span-1 px-5">
      <RightProductDetail data={props.data} />
    </div>
  );
};

export default RightProductOne;
