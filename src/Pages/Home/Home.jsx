import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import BrandCard from "../../Components/BrandCard/BrandCard";
import Faq from "../../Components/FAQ/Faq";
import ContactUs from "../../Components/ContactUs/ContactUs";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <h1 className="mt-10 text-5xl font-medium text-center md:text-6xl">
        Our Brands
      </h1>
      <div className="container grid grid-cols-1 gap-6 px-2 mx-auto mt-5 mb-10 md:grid-cols-2 lg:grid-cols-3">
        {brands?.map((brand, idx) => (
          <BrandCard key={idx} brand={brand}></BrandCard>
        ))}
      </div>
      <Faq></Faq>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
