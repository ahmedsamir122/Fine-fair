import { useDispatch } from "react-redux";
import { filterActions } from "../../../store/filter";

const CategoryItemOne = (props) => {
  const dispatch = useDispatch();
  const filterHandler = (e) => {
    if (e.target.checked) {
      dispatch(filterActions.addFilter(e.target.value));
    } else {
      dispatch(filterActions.removeFilter(e.target.value));
    }
  };
  return (
    <div className="flex justify-start items-center py-2">
      <input
        type="checkbox"
        className="mr-4 block"
        value={props.name}
        id={props.name}
        onChange={filterHandler}
      />
      <label
        className=" font-Quicksand text-base font-semibold uppercase"
        for={props.name}
      >
        {props.name}
      </label>
    </div>
  );
};

export default CategoryItemOne;
