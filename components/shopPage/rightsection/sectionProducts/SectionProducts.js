import { useQuery } from "react-query";
import ProductPrice from "../../../ProductPrice";
import { TailSpin } from "react-loader-spinner";
import { Fragment } from "react";
import ProductPriceMenu from "../../../ProductPriceMenu";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};
const SectionProducts = (props) => {
  const filter = useSelector((state) => state.filter.filter);

  const { isLoading, data, isError, error } = useQuery(
    "products",
    fetchProducts
  );
  const [productsArray, setProductsArray] = useState(data.products);

  useEffect(() => {
    if (filter.length === 0) {
      setProductsArray(data.products);
    } else {
      setProductsArray(
        data.products.filter((item) => {
          return filter.some((fil) => fil === item.category);
        })
      );
    }
  }, [filter]);
  console.log(productsArray);
  console.log(
    data.products.filter((item) => {
      return filter.some((fil) => fil === item.category);
    })
  );
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-56">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (isError) {
    return <di>something went wrong .....</di>;
  }
  return (
    <Fragment>
      {props.grid && (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
          {productsArray.map((item) => (
            <ProductPrice
              id={item.id}
              key={item.id}
              img={item.thumbnail}
              price={item.price}
              text={item.description}
              title={item.title}
              onNote={props.onNote}
            />
          ))}
        </div>
      )}
      {props.menu && (
        <div>
          {data.products.map((item) => (
            <ProductPriceMenu
              id={item.id}
              key={item.id}
              img={item.thumbnail}
              price={item.price}
              text={item.description}
              title={item.title}
            />
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default SectionProducts;
