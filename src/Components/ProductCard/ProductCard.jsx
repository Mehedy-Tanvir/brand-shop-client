import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="border-2 border-yellow-500 justify-self-center card lg:w-96 bg-base-100">
      <figure className="p-4">
        <img
          className="h-[200px] object-cover object-center"
          src={product.image}
          alt="Product"
        />
      </figure>
      <div className="card-body">
        <p className="text-3xl font-semibold">{product.brand}</p>
        <h2 className="text-3xl font-bold card-title">{product.name}</h2>
        <div className="flex items-center justify-center">
          <p className="text-xl font-medium">Rating: {product.rating}</p>
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
        </div>

        <div className="grid grid-cols-2">
          <p className="text-xl font-regular">Type: {product.type}</p>
          <p className="text-2xl text-yellow-600 font-regular">
            Price: ${product.price}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button className="bg-yellow-500 hover:opacity-90 text-white text-2xl h-[50px] px-[20px] rounded-none">
            Details
          </button>
          <button className="bg-yellow-500 hover:opacity-90 text-white text-2xl h-[50px] px-[20px] rounded-none">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
