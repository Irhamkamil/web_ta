// ProductDetailsWrapper.jsx
import { useParams } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails";

const ProductDetailsWrapper = () => {
  const { id } = useParams();
  return <ProductDetails id={id} />;
};

export default ProductDetailsWrapper;