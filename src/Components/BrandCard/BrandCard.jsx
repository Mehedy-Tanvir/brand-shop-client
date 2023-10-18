import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <Link to={`/brands/${brand.name}`}>
      <div className="relative rounded-lg shadow-lg card card-compact">
        <figure>
          <img
            className="object-cover h-[300px] object-center rounded-lg p-4"
            src={brand.image}
            alt="Shoes"
          />
        </figure>
        <div className="absolute z-20 w-full h-full rounded-lg bg-orange-50 opacity-30"></div>

        <div className="h-[100px] card-body">
          <h1 className="z-50 text-5xl font-semibold text-center text-black ">
            {brand.name}
          </h1>
        </div>
      </div>
    </Link>
  );
};
BrandCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandCard;
