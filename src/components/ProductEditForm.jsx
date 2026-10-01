import React, { useState } from "react";

const ProductEditForm = ({
    setProducts,
    editValues,
    setEditProduct
}) => {

    const [name, setName] = useState(editValues.name);
    const [price, setPrice] = useState(editValues.price);
    const [image, setImage] = useState(editValues.image);
    const [category, setCategory] = useState(editValues.category);

    const handleSubmit = (e) => {
        e.preventDefault();

        setProducts((products) =>
            products.map((product) =>
                product.id === editValues.id
                    ? {
                        ...product,
                        name: name,
                        price: price,
                        image: image,
                        category: category
                    }
                    : product
            )
        );

        setEditProduct(null);
    };

    const handleCancel = () => {
        setEditProduct(null);
    };

    return (
        <div className="h-screen w-150 transform:transition duration-500">


            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 p-10 border-none rounded-lg h-screen pt-20 bg-amber-100"
            >

                <h1 className="text-center text-2xl font-extrabold mb-5 text-amber-950">
                    EDIT PRODUCT
                </h1>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border-2 py-3 px-5 rounded-2xl border-amber-950 font-bold text-amber-950 bg-white outline-none"
                    placeholder="Name"
                />

                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border-2 py-3 px-5 rounded-2xl border-amber-950 font-bold text-amber-950 bg-white outline-none"
                    placeholder="Price"
                />

                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="border-2 py-3 px-5 rounded-2xl border-amber-950 font-bold text-amber-950 bg-white outline-none"
                    placeholder="Image URL"
                />

                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border-2 py-3 px-5 rounded-2xl border-amber-950 font-bold text-amber-950 bg-white outline-none"
                    placeholder="Category"
                />

                <div className="flex gap-7">

                    <button
                        type="submit"
                        className="bg-amber-950 text-white p-3 rounded-2xl font-bold w-1/2"
                    >
                        Add Product
                    </button>

                    <button
                        type="button"
                        onClick={handleCancel}
                        className="bg-amber-700 text-white p-3 rounded-2xl font-bold w-1/2"
                    >
                        Cancel
                    </button>

                </div>

            </form>

        </div>
    );
};

export default ProductEditForm;