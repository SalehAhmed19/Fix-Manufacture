import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imgStorageKey = "5b89130c9a902f8f77a5dbe94c35281a";
  const onSubmit = async (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, { method: "POST", body: formData })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            des: data.des,
            min_order: parseInt(data.minimum),
            available_quantity: parseInt(data.quantity),
            price: parseFloat(data.price),
            img: img,
          };
          fetch("https://stark-basin-47833.herokuapp.com/parts", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          });
          toast.success("Product added successfully");
          reset();
        }
      });
  };
  return (
    <div>
      <div className="border rounded-md w-1/2 p-7">
        <h2 className="text-xl font-bold">Add Products</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full my-3"
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              {...register("des", {
                required: {
                  value: true,
                  message: "Description is required",
                },
              })}
              type="text"
              placeholder="Description"
              className="input input-bordered w-full my-3"
            />
            <label className="label">
              {errors.des?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.des.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              {...register("minimum", {
                required: {
                  value: true,
                  message: "Minimum Order quantity is required",
                },
              })}
              type="number"
              placeholder="Minimum Order Quantity"
              className="input input-bordered w-full my-3"
            />
            <label className="label">
              {errors.minimum?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimum.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Product Quantity is required",
                },
              })}
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full my-3"
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is required",
                },
              })}
              placeholder="Price"
              type="text"
              className="input input-bordered w-full my-3"
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>
          <div>
            <input
              {...register("img", {
                required: {
                  value: true,
                  message: "Image is required",
                },
              })}
              type="file"
              className="input w-full my-3"
            />
            <label className="label">
              {errors.img?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.img.message}
                </span>
              )}
            </label>
          </div>
          <input
            className="btn btn-primary block mt-4 w-full"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
