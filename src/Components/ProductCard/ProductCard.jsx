import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ProductCard = () => {
  return (
    <div className="border-2 border-yellow-500 card lg:w-96 bg-base-100">
      <figure>
        <img src="/samsung.jpg" alt="Product" />
      </figure>
      <div className="card-body">
        <p className="text-3xl font-semibold">Samsung</p>
        <h2 className="text-3xl font-bold card-title">Galaxy S23 Ultra</h2>
        <div className="flex items-center justify-center">
          <p className="text-xl font-medium">Rating: 4.5</p>
          <Rating
            initialRating="4.5"
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
          <p className="text-xl font-regular">Type: Phone</p>
          <p className="text-2xl text-yellow-600 font-regular">
            Price: $999.99
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

export default ProductCard;
