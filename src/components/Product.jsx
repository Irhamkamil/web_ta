import FirebaseServices from "../services/Firebase";
import { NavLink } from "react-router-dom";
import EncryptionServices from "../services/Encryption";

const Product = ({ products }) => {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full px-10 mt-20 my-10 gap-10 relative">
        {products.map((product, index) => (
          <div key={index}>
            <img
              className="h-auto md:w-96 rounded-lg absolute"
              src={FirebaseServices.fileStorageUri(product.image)}
              alt={product.name}
            />
            <div className="flex md:w-96 h-20 mt-56 rounded-lg bg-white relative">
              <div className="flex-col px-8 mt-3">
                <NavLink to={'/tour/details/' + EncryptionServices.base64Encrypt(product.name)}>
                  <h2 className="font-bold text-lg text-black">
                    {product.name}
                  </h2>
                </NavLink>
                <p className="font-medium text-base text-black opacity-50">
                  {product.location}
                </p>
              </div>
              <h1 className="px-8 mt-3 text-secondary">{product.duration}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
