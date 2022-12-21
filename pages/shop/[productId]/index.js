import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useFetchProduct } from "../../../hooks/useFetchProduct";
import ProductOne from "../../../components/productOne/ProductOne";
import { TailSpin } from "react-loader-spinner";

const ProductId = () => {
  const [product, setpProduct] = useState(null);
  const router = useRouter();

  const id = router.query.productId;
  const { isLoading, data, isError, error } = useFetchProduct(id);

  console.log(data);
  console.log(isError, error);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-56">
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
    router.push("/404");
    return;
  }

  return <ProductOne data={data} />;
};

export default ProductId;
