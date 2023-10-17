const Banner = () => {
  return (
    <div className="relative min-h-screen hero">
      <div
        className="absolute top-0 left-0 w-full h-full bg-orange-50"
        style={{
          backgroundImage: `url('/banner-bg.jpg')`,
          transform: "scaleY(-1) scaleX(-1)",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-orange-100 bg-opacity-90 hero-overlay"></div>
      </div>
      <div className="relative z-10 flex-col hero-content lg:flex-row-reverse">
        <img src="/banner-img.png" className="md:max-w-sm" />
        <div>
          <h1 className="text-5xl text-center lg:text-left leading-[50px] md:text-6xl text-blue-1000 font-bold md:leading-[80px]">
            Explore the <br />
            Future of Innovation!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
