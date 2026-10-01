import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";


const ProductCard = ({ product, setProducts, setEditProduct }) => {

    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");

        if (confirmDelete) {
            setProducts((products) =>
                products.filter((item) => item.id !== product.id)
            );
        }
    };

    const handleEdit = () => {
        setEditProduct(product);
    };

    return (
        <div className=' p-5 m-3 bg-white border-1 border-amber-950  space-y-2 rounded-lg shadow-2xl shadow-gray-700 '>
            <div className="flex gap-5 text-3xl pb-3">
                <button className="text-amber-700" onClick={handleEdit}>
                    <MdEdit />
                </button>
                <button className=" text-amber-950" onClick={handleDelete}>
                    <MdDelete />
                </button>
            </div>
            <img src={product.image} alt={product.title} />
            <h1 className=' font-bold text-lg'>{product.name}</h1>
            <p className=' text-3xl font-bold'>₹{product.price}</p>
            <p className='  text-amber-700 font-bold'>{product.category}</p>

        </div>
    )
}

export default ProductCard