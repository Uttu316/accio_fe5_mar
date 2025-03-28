import { useParams } from "react-router";
import Header from "../../components/header";
import { useEffect, useState } from "react";
import getMeal from "../../services/menuServices/getMeal";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  const [status, setStatus] = useState("loading");

  const isLoading = status === "loading";
  const isError = status === "error";
  const isDone = status === "done";

  const hasProduct = isDone && !!product;
  const noProduct = isDone && !product;

  const fetchProduct = async () => {
    setStatus("loading");
    try {
      const data = await getMeal(productId);
      setProduct(data);
      setStatus("done");
    } catch (e) {
      setStatus("error");
    }
  };
  useEffect(() => {
    fetchProduct();
  }, [productId]);
  return (
    <div>
      <Header />
      <div>
        {isLoading && <h1>Loading ...</h1>}
        {isError && <h1>Something went wrong </h1>}
        {noProduct && <h1>Proudct not Available </h1>}
        {hasProduct && (
          <div>
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <h2>{product.area}</h2>
            <p>{product.description}</p>
            <img src={product.picture} height={100} width={100} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
