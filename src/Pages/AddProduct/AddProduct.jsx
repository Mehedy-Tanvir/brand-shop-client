import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const AddProduct = () => {
  const [selectedBrand, setBrand] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const brand = selectedBrand;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const product = {
      name,
      image,
      brand,
      type,
      price,
      rating,
      description,
    };
    console.log(product);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        toast.success("Product added successfully");
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container px-2 mx-auto mt-10 mb-10">
      <Toaster />
      <div className="hero">
        <div className="flex-col md:flex-row-reverse hero-content">
          <div className="">
            <img
              className="hidden md:block xl:h-[600px]"
              src="/add-product.jpg"
              alt=""
            />
          </div>
          <div className="flex-shrink-0 border-2 border-yellow-500 shadow-xl card">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Image</span>
                  </label>
                  <input
                    name="image"
                    type="text"
                    placeholder="image url"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <select
                    className="w-full max-w-xs select"
                    onChange={(e) => setBrand(e.target.value)}
                    value={selectedBrand}
                    required
                  >
                    <option disabled value="">
                      Brand
                    </option>
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="LG">LG</option>
                    <option value="HP">HP</option>
                    <option value="Sony">Sony</option>
                    <option value="Intel">Intel</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Type</span>
                  </label>
                  <input
                    name="type"
                    type="text"
                    placeholder="phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    name="price"
                    type="number"
                    placeholder="price"
                    step="0.01"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    name="rating"
                    step="0.01"
                    placeholder="rating"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="md:col-span-2 form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="description"
                    required
                    name="description"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 form-control">
                <button className="bg-yellow-500 hover:opacity-90 text-white text-xl md:text-3xl h-[60px] px-[20px] rounded-none">
                  ADD PRODUCT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
