import { useEffect, useState } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";
import { useLoaderData, useParams } from "react-router-dom";

const Products = () => {
  const loadedProducts = useLoaderData();
  const { name } = useParams();
  const brandName = name;
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredBrand = data?.find(
          (company) => company.name === brandName
        );
        setBrand(filteredBrand);
      })
      .catch((error) => console.log(error));
  }, [brandName]);

  useEffect(() => {
    const nextBtns = [
      document.querySelector("#next1"),
      document.querySelector("#next2"),
      document.querySelector("#next3"),
      document.querySelector("#next4"),
    ];
    let currentIndex = 0;

    const clickNextButton = () => {
      if (currentIndex < nextBtns.length) {
        nextBtns[currentIndex].click();
        currentIndex++;
      } else {
        currentIndex = 0;
        clearInterval(interval);
      }
    };

    const interval = setInterval(clickNextButton, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container mx-auto">
      <div className="w-full carousel">
        <div id="slide1" className="relative h-[500px] w-full carousel-item">
          <img src={brand.slide1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a id="next1" href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative h-[500px] w-full carousel-item">
          <img src={brand.slide2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a id="next2" href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative h-[500px] w-full carousel-item">
          <img src={brand.slide3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a id="next3" href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="relative h-[500px] w-full carousel-item">
          <img src={brand.slide4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a id="next4" href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {loadedProducts.length === 0 && (
        <div className="mt-10 h-[500px] flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center">No products found</h1>
        </div>
      )}
      <div className="container grid grid-cols-1 gap-6 mx-auto mt-10 mb-10 md:grid-cols-2 xl:grid-cols-3">
        {loadedProducts?.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
