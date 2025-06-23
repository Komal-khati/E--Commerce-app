import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";

function Category() {
    const navigate = useNavigate();

    return ( 
        <div className="Category">
             <div onClick={() => navigate ('/category')} className="category-content center">
                 <h3 className="heading">Comics</h3>
             </div>
        </div>
     );
}

export default Category;