import { useEffect, useState } from "react";
import auth from "../../firebase/firebaseConfig";
import CartCard from "../../Components/CartCard/CartCard";

const MyCart = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/userCart/${auth.currentUser.uid}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.cart);
      });
  }, []);
  return (
    <div className="container mx-auto mt-10 mb-10">
      <h1 className="text-4xl font-bold text-center">My Cart</h1>
      {products.length === 0 && (
        <div className="flex items-center justify-center h-[600px]">
          <h1 className="text-4xl font-semibold text-center">
            No Products Added
          </h1>
        </div>
      )}
      <div className="container grid grid-cols-1 gap-6 mx-auto mt-10 mb-10 md:grid-cols-2 xl:grid-cols-3">
        {products?.map((product, idx) => (
          <CartCard
            index={idx}
            key={idx}
            setProducts={setProducts}
            products={products}
            product={product}
          ></CartCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
