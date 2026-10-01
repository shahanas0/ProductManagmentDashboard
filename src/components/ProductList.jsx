
import ProductEditForm from "./ProductEditForm";
import React, { useMemo, useState } from 'react'
import ProductCard from './ProductCard';
import ProductAddForm from './ProductAddForm';
import { FaSearch } from "react-icons/fa";

const ProductList = ({ products, setProducts }) => {

    const categories = ["all", ...new Set(products.map((prod) => prod.category))]

    const [prodcutFormVisibility, setProductFormVisibility] = useState(false)

    const [category, setCategory] = useState("all")
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("")
    const [editProduct, setEditProduct] = useState(null);

    const filteredProducts = useMemo(() => {
        let result = products.filter((prod) => {
            const categoryMatch = category === "all" || category === prod.category;
            const searchMatch = prod.name.toLowerCase().includes(search.toLowerCase());
            return searchMatch && categoryMatch
        });

        if (sort === "price-low") {
            result.sort((a, b) => a.price - b.price);
        }

        if (sort === "price-high") {
            result.sort((a, b) => b.price - a.price);
        }

        if (sort === "name-az") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sort === "name-za") {
            result.sort((a, b) => b.name.localeCompare(a.name));
        }
        return result;
    }, [category, products, search, sort])

    console.log(filteredProducts, products);

    return (
        <div className=' min-h-screen p-10 space-y-6 overflow-hidden bg-amber-50 ' style={{ height: prodcutFormVisibility && "100vh" }}>
            <div className=' flex justify-between overflow-hidden '>
                <select className='border-2 border-amber-950 pl-3 pr-15 font-bold text-amber-950 rounded-2xl' value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option className='font-bold' value="">Sort By</option>
                    <option value="price-low">Price: Low → High</option>
                    <option value="price-high">Price: High → Low</option>
                    <option value="name-az">Name: A → Z</option>
                    <option value="name-za">Name: Z → A</option>
                </select>
                <div>
                    <button onClick={() => setProductFormVisibility(true)} className=' px-7 w-70 font-bold text-xl rounded-2xl py-3 border text-white cursor-pointer  bg-amber-700 rounded '>
                        Add Product
                    </button>
                    <div className='  absolute bg-amber-100 z-50  left-0 -translate-x-full top-0 transition duration-500  ' style={{ translate: prodcutFormVisibility && "0" }}>
                        <ProductAddForm setProducts={setProducts} setProductFormVisibility={setProductFormVisibility} />
                    </div>
                </div>
            </div>
            <div className=' flex justify-between'>
                <select className=' border-2 border-amber-950 outline-none pr-10 pl-3 rounded-2xl py-2 text-lg font-semibold bg-white text-amber-950' onChange={(e) => setCategory(e.target.value)} name="" id="" value={category} >
                    {
                        categories.map((category) => {
                            return <option value={category} className='capitalize'>{category}</option>
                        })
                    }
                </select>
                <div className='relative flex items-center'>
                    <input className='border pl-12 pr-5 py-3 w-150 rounded-2xl outline-none border-amber-950 border-2 text-amber-950 font-bold' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <span className='absolute left-3 text-amber-950'><FaSearch size={25} /></span>
                </div>
                <p className=' font-bold text-3xl text-amber-950'>Total Products :{filteredProducts.length}</p>
            </div>
            <div className=' grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
                {
                    filteredProducts.map((product) => {
                        return (
                            <ProductCard key={product.id} product={product} setProducts={setProducts} setEditProduct={setEditProduct} />
                        )
                    })
                }
            </div>

            <div className="animate-slide-in duration-1000">
                {editProduct && (
                    <div className="fixed inset-0 z-50 bg-black/40">
                        <ProductEditForm
                            setProducts={setProducts}
                            editValues={editProduct}
                            setEditProduct={setEditProduct}
                        />
                    </div>
                )}
            </div>


        </div>
    )
}

export default ProductList

