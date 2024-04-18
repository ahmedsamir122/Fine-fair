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
  const [productsArray, setProductsArray] = useState([]);

  const { isLoading, data, isError, error } = useQuery(
    "products",
    fetchProducts
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    setProductsArray(
      data.products.filter((item) => {
        return filter.some((fil) => fil === item.category);
      })
    );
  }, [filter]);

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

  console.log(productsArray, data.products);
  console.log(
    data.products.filter((item) => {
      return filter.some((fil) => fil === item.category);
    })
  );
  return (
    <Fragment>
      {props.grid && (
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-10">
          {filter.length === 0 &&
            data.products.map((item) => (
              <ProductPrice
                id={item.id}
                key={item.id}
                img={item.thumbnail}
                price={item.price}
                text={item.description}
                title={item.title}
                onNote={props.onNote}
                offNote={props.offNote}
              />
            ))}
          {filter.length > 0 &&
            productsArray.map((item) => (
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
          {filter.length === 0 &&
            data.products.map((item) => (
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
      {props.menu && (
        <div>
          {filter.length > 0 &&
            productsArray.map((item) => (
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
