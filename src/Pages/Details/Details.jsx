import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import auth from "../../firebase/firebaseConfig";
import toast from "react-hot-toast";
const Details = () => {
  const product = useLoaderData();

  const handleAddToCart = (productToAdd) => {
    const userCart = {
      user: auth.currentUser.uid,
      cart: [productToAdd],
    };

    fetch(`http://localhost:3000/userCart/${auth.currentUser.uid}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCart),
    })
      .then((res) => {
        toast.success("Product added to your cart successfully");
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Unable to add product to the cart");
      });
  };
  return (
    <div className="container px-2 mx-auto mt-10 mb-10 lg:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="justify-self-center">
          <img className="lg:h-[400px]" src={product.image} alt="" />
          <p className="text-5xl font-semibold text-center">{product.brand}</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold card-title">{product.name}</h2>

          <p className="mt-4 mb-2 text-xl font-medium">
            Rating: {product.rating}
          </p>
          <Rating
            initialRating={product.rating}
            readonly="true"
            emptySymbol={
              <AiOutlineStar className="text-2xl text-yellow-500"></AiOutlineStar>
            }
            placeholderSymbol={
              <img src="assets/images/star-red.png" className="icon" />
            }
            fullSymbol={
              <AiFillStar className="text-2xl text-yellow-500"></AiFillStar>
            }
          />

          <p className="mb-1 text-xl font-regular">Type: {product.type}</p>
          <p className="mb-2 text-2xl text-yellow-600 font-regular">
            Price: ${product.price}
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-yellow-500 mb-2 hover:opacity-90 text-white text-2xl h-[50px] px-[20px] rounded-none"
          >
            Add to Cart
          </button>
          <p className="">
            <span className="text-xl font-semibold">Description: </span>
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
