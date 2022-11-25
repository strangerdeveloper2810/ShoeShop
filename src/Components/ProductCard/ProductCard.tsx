import React from "react";
import { NavLink } from "react-router-dom";
import { ProductModel } from "../../redux/types/ProductType";

type Props = {
  product: ProductModel;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="icon position-relative">
        <i
          className="fa fa-heart position-absolute end-0 mt-2 mx-2"
          style={{ fontSize: 20, color: "red" }}
        ></i>

        <img
          className="w-100 card-img-top"
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">{product.price.toLocaleString()}$</p>
        <NavLink
          to={`/detail/${product.id}`}
          className="btn btn-success mt-2"
          style={{ borderRadius: "0px" }}
        >
          Buy Now
        </NavLink>
      </div>
    </div>
  );
}
