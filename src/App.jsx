import React, { useState } from 'react'
import ProductList from './components/ProductList';
import Header from './components/Header';
import ProductEditForm from './components/ProductEditForm';

const initialProducts = [
  {
    id: 1,
    name: "Essence Mascara Lash Princess",
    category: "beauty",
    price: 899,
    image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
  },
  {
    id: 2,
    name: "Eyeshadow Palette with Mirror",
    category: "beauty",
    price: 1699,
    image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
  },
  {
    id: 3,
    name: "Powder Canister",
    category: "beauty",
    price: 1299,
    image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
  },
  {
    id: 4,
    name: "Red Lipstick",
    category: "beauty",
    price: 1099,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  },
  {
    id: 5,
    name: "Calvin Klein CK One",
    category: "fragrances",
    price: 4299,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
  },
  {
    id: 6,
    name: "Chanel Coco Noir Eau De",
    category: "fragrances",
    price: 10999,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/thumbnail.png",
  },
  {
    id: 7,
    name: "Annibale Colombo Bed",
    category: "furniture",
    price: 159999,
    image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/thumbnail.png",
  },
  {
    id: 8,
    name: "Wooden Bathroom Sink With Mirror",
    category: "furniture",
    price: 67999,
    image: "https://cdn.dummyjson.com/products/images/furniture/Wooden%20Bathroom%20Sink%20With%20Mirror/thumbnail.png",
  },
  {
    id: 9,
    name: "Apple AirPods Max Silver",
    category: "mobile-accessories",
    price: 45999,
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20AirPods%20Max%20Silver/thumbnail.png",
  },
  {
    id: 10,
    name: "Apple Airpods",
    category: "mobile-accessories",
    price: 10999,
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png",
  },
  {
    id: 11,
    name: "iPhone 12 Silicone Case with MagSafe Plum",
    category: "mobile-accessories",
    price: 2499,
    image: "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png",
  },
  {
    id: 12,
    name: "Rolex Submariner Watch",
    category: "mens-watches",
    price: 1199999,
    image: "https://cdn.dummyjson.com/products/images/mens-watches/Rolex%20Submariner%20Watch/thumbnail.png",
  },
  {
    id: 13,
    name: "Cricket Helmet",
    category: "sports-accessories",
    price: 3999,
    image: "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png",
  },
  {
    id: 14,
    name: "Green and Black Basketball",
    category: "sports-accessories",
    price: 2499,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGV5TGXwz7QxIElX1272Bv1ej27s7dPdfnk7EwLG0HxWYw_VzrWMHfzZ5z&s=10",
  },
  {
    id: 15,
    name: "Blue & Black Check Shirt",
    category: "mens-shirts",
    price: 2499,
    image: "https://cdn.dummyjson.com/products/images/mens-shirts/Blue%20%26%20Black%20Check%20Shirt/thumbnail.png",
  },
  {
    id: 16,
    name: "Gigabyte Aorus Master",
    category: "laptops",
    price: 249999,
    image: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3895/innergigabyte/images/product/outlook-hardware.png",
  },
  {
    id: 17,
    name: "Apple MacBook Pro 14 Inch Space Grey",
    category: "laptops",
    price: 169999,
    image: "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png",
  },
  {
    id: 18,
    name: "Samsung Galaxy Book",
    category: "laptops",
    price: 124999,
    image: "https://media-ik.croma.com/Croma%20Assets/Computers%20Peripherals/Laptop/Images/315741_0_8IXWPsPHZ.png?updatedAt=1787658315856",
  },
  {
    id: 19,
    name: "Nike Air Jordan 1 Red",
    category: "mens-shoes",
    price: 12999,
    image: "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e1866da8-e0b9-41f8-808b-ccbbb0c0efd0/AIR+JORDAN+1+RETRO+LOW+OG+%28GS%29.png",
  },
  {
    id: 20,
    name: "Puma Future Rider",
    category: "mens-shoes",
    price: 9999,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/391926/06/sv01/fnd/IDN/fmt/png/Future-Rider-Concrete-Jungle-Sneakers",
  },
  {
    id: 21,
    name: "Black Women's Handbag",
    category: "womens-bags",
    price: 4299,
    image: "https://m.media-amazon.com/images/I/51vQrBleQ0L._AC_UY1000_.jpg",
  },
  {
    id: 22,
    name: "Louis Vuitton Women's Bag",
    category: "womens-bags",
    price: 159999,
    image: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multipass-mini--M29099_PM2_Front%20view.jpg",
  },
  {
    id: 23,
    name: "Red Nail Polish",
    category: "beauty",
    price: 749,
    image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
  },
  {
    id: 24,
    name: "Dior J'adore",
    category: "fragrances",
    price: 7499,
    image: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png",
  },
  {
    id: 25,
    name: "Brown Leather Belt",
    category: "mens-accessories",
    price: 1999,
    image: "https://www.bonjourretail.com/cdn/shop/files/BRO3A1019-34-DK_BROWN.jpg?v=1775478445",
  },
  {
    id: 26,
    name: "Apple Watch Series 9",
    category: "mens-watches",
    price: 33999,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgup_VPO-ODqBiLvMphYd_YFp7q1fLMWu-VCvE6OOo4Z8jIMx5P59nASA&s=10",
  },
  {
    id: 27,
    name: "Blue Running Shoes",
    category: "mens-shoes",
    price: 7499,
    image: "https://offlimits.co.in/cdn/shop/files/ORM-661_03_1.jpg?v=1772535958",
  },
  {
    id: 28,
    name: "Samsung Galaxy S23",
    category: "smartphones",
    price: 58999,
    image: "https://m.media-amazon.com/images/I/719zApN1mhL.jpg",
  },
  {
    id: 29,
    name: "iPhone 13 Pro",
    category: "smartphones",
    price: 83999,
    image: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%2013%20Pro/thumbnail.png",
  },
  {
    id: 30,
    name: "Google Pixel 7",
    category: "smartphones",
    price: 49999,
    image: "https://zellen.com.pk/assets/generated/pixel-7-pro.webp",
  },
];

const App = () => {


  const [products, setProdcuts] = useState(initialProducts)


  return (
    <div>

      <Header />
      <ProductList products={products} setProducts={setProdcuts} />
      
    </div>
  )
}

export default App