import React from "react";
import { NavLink } from "react-router-dom";
import { ProductModel } from "../../redux/types/ProductType";

type Props = {
  product: ProductModel;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="card mb-5" style={{ width: "20rem", height:"32rem" }}>
      <div className="icon position-relative">
        <i
          className="fa fa-heart position-absolute end-0 mt-2 mx-2"
          style={{ fontSize: 20, color: "red" }}
        ></i>

        <img
          className="card-img-top"
          style={{width: "300px", height: "250px"}}
          src={product.image}
          alt={product.name}
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.shortDescription}</p>
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
