import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { BsCart2 } from "react-icons/bs";

function Navbar() {
    return ( 
        <diV className="Navbar">
            <diV className="container nav-container">
                <diV className="nav-left">
                    <ul className="link-group">
                        <li className="hover-link">
                            <Link to="/products?category=comics">Comics</Link>
                        </li>
                        <li className="hover-link">
                            <Link to="/products?category=tv-shows">TV Shows</Link>
                        </li>
                        <li className="hover-link">
                            <Link to="/products?category=sports">Sports</Link>

                        </li>
                    </ul>
                </diV>

                <diV className="nav-center">
                    <Link to="/">
                       <h1 className="banner">Posterz.</h1>
                    </Link>
                </diV>

                <diV className="nav-right">
                    <div className="nav-cart hover-link">
                        <BsCart2 className="icon" />
                        <span className="cart-count center">99+</span>
                    </div>
                </diV>
            </diV>
        </diV>
     );
}

export default Navbar;