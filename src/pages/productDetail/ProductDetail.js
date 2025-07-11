import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
//import dummyImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/loader/Loader";

function ProductDetail() {
    const params = useParams();
    const [product,setProduct] = useState(null);
   const productKey =params.productId;

    console.log("params" , params);

    async function fetchData() {
        const productResponse = await axiosClient.get(
            `api/products?filters[key][$eq]=${params.productId}&populate=*`
        )
        if (productResponse.data.data.length > 0) {
            setProduct(productResponse.data.data[0]);
        }
    }

    useEffect(() => {
        setProduct(null);
        fetchData();
    },[params]);

    if (!product) {
    return <Loader/>
      }
    
    return ( 
        <div className="ProductDetail">
     <div className="container">
         <div className="product-layout">
             <div className="product-img">
                 <img
                     src={product?.attributes.image.data.attributes.url}
                     alt={product?.attributes.title}
                     width ="400px"
                 />
             </div>
             <div className="product-info">
                 <h1 className="heading">{product?.attributes.title}</h1>
                 <h3 className="price">₹ {product?.attributes.price}</h3>
                 <p className="description">
                     {product?.attributes.desc}
                 </p>
                 <div className="cart-options">
                     <div className="quantity-selector">
                         <span className="btn decrement" >-</span>
                         <span className="quantity">3</span>
                         <span className="btn increment" >+</span>
                     </div>
                     <button className="btn-primary add-to-cart" >
                         Add to Cart
                     </button>
                 </div>
                 <div className="return-policy">
                     <ul>
                         <li>
                             This product is made to order and is
                             typically printed in 3-6 working days. Your
                             entire order will ship out together.
                         </li>
                         <li>
                             Since this product is printed on demand
                             especially for you, it is not eligible for
                             cancellations and returns. Read our Return
                             Policy.
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
 
     );
}

export default ProductDetail;