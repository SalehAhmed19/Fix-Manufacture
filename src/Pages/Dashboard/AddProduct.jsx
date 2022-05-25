import React from "react";

const AddProduct = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const productName = event.target.name.value;
    const description = event.target.description.value;
    const minOrder = event.target.minimum.value;
    const availableQtY = event.target.quantity.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    console.log(productName, description, minOrder, availableQtY, price, image);
    event.target.reset();
  };
  return (
    <div>
      <div className="border rounded-md w-1/2 p-7">
        <h2 className="text-xl font-bold">Add Products</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="bolck h-10 pl-4 w-full my-3 border rounded-lg"
            type="text"
            name="name"
            placeholder="Product Name"
          />
          <input
            className="bolck h-10 pl-4 w-full my-3 border rounded-lg"
            type="text"
            name="description"
            placeholder="Product Description"
          />
          <input
            className="bolck h-10 pl-4 w-full my-3 border rounded-lg"
            type="number"
            name="minimum"
            placeholder="Minimum Order"
          />
          <input
            className="bolck h-10 pl-4 w-full my-3 border rounded-lg"
            type="text"
            name="quantity"
            placeholder="Available Order"
          />
          <input
            className="bolck h-10 pl-4 w-full my-3 border rounded-lg"
            type="number"
            name="price"
            placeholder="Price"
          />
          <input type="file" name="image" id="" />
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
