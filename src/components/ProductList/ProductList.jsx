import React from "react";
import "./productlist.css";
import Product from "../Product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Take A look at some of my projects that I have done. On clicking each
          projects it will take you to the GitHub link. On the GitHub link you
          can find the code for the Project. Also, at the Readme.md section at
          the bottom you will find the live hosted link for each of these
          projects.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product img={item.img} key={item.id} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
