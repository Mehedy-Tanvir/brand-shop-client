import { useEffect } from "react";
import ProductCard from "../../Components/ProductCard/ProductCard";

const Products = () => {
  useEffect(() => {
    const nextBtns = [
      document.querySelector("#next1"),
      document.querySelector("#next2"),
      document.querySelector("#next3"),
      document.querySelector("#next4"),
    ];
    let currentIndex = 0;

    const clickNextButton = () => {
      nextBtns[currentIndex].click();
      currentIndex++;
      if (currentIndex === nextBtns.length) {
        currentIndex = 0;
      }
    };

    const interval = setInterval(clickNextButton, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="container">
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img
            src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Samsung-Galaxy-Social-Media-Banner-Design-scaled.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a id="next1" href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img
            src="https://techprolonged.com/wp-content/uploads/2017/04/galaxy-s8-s8-plus-banner.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a id="next2" href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="relative w-full carousel-item">
          <img
            src="https://i.ytimg.com/vi/KS6tymacg9I/maxresdefault.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a id="next3" href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="relative w-full carousel-item">
          <img
            src="https://img.global.news.samsung.com/global/wp-content/uploads/2015/03/1.png"
            className="w-full"
          />
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
      <ProductCard></ProductCard>
    </div>
  );
};

export default Products;
