import React, { useState } from 'react'

const ProductAddForm = ({ setProducts, setProductFormVisibility }) => {


    const [formValues, setFormValues] = useState({
        name: "",
        image: "",
        price: "",
        category: ""
    })



    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {


        e.preventDefault()


        console.log(formValues);


        if (!formValues.category || !formValues.image || !formValues.name || !formValues.price) {

            alert("All fields required!")
            return
        }

        setProducts((prev) => {
            return [...prev, { ...formValues, id: prev.length + 1 }]
        })

        setFormValues({
            name: "",
            image: "",
            price: "",
            category: ""
        })

        setProductFormVisibility(false)
    }


    return (
        <div className='h-screen'>



            <form onSubmit={handleSubmit} className='w-xl h-screen flex flex-col gap-6 p-10'>

                <h1 className='text-center text-2xl font-extrabold text-amber-950 mb-5 mt-20'>
                    ADD PRODUCT
                </h1>

                <input onChange={handleChange} value={formValues.name} className=' px-4 py-3 border-2 text-amber-950 font-bold outline-none rounded-2xl bg-white' type="text" name="name" id="" placeholder=' Enter product name' />
                <input onChange={handleChange} value={formValues.price} className=' px-4 py-3 border-2 text-amber-950 font-bold outline-none rounded-2xl bg-white' type="text" name="price" id="" placeholder=' Enter product price' />
                <input onChange={handleChange} value={formValues.category} className=' px-4 py-3 border-2 text-amber-950 font-bold outline-none rounded-2xl bg-white' type="text" name="category" id="" placeholder=' Enter product category' />
                <input onChange={handleChange} value={formValues.image} className=' px-4 py-3 border-2 text-amber-950 font-bold outline-none rounded-2xl bg-white' type="text" name="image" id="" placeholder=' Enter product image url' />

                <div className='gap-5 flex'>
                    <button className=' bg-amber-950 text-white py-3 cursor-pointer rounded-2xl w-1/2 font-bold'>
                        Add Product
                    </button>
                    <button onClick={() => setProductFormVisibility(false)} type='button' className=' bg-amber-600 w-1/2 font-bold text-white py-3 cursor-pointer rounded-2xl'>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ProductAddForm