import React, { useState } from "react";
import { connect } from "react-redux";
import { AddProduct } from "../ReduxTodoProject/Action";
import { RemoveProduct } from "../ReduxTodoProject/Action";

const Cart = ({ products, AddProduct, RemoveProduct }) => {
  const [item, setItem] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();
    if (item !== "") {
      await AddProduct({ name: item });
      setItem("");
    }
    setItem("");
  };
  return (
    <center>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Add Products"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-success">
              Add Product
            </button>
          </form>
          <br />
          {products.map((product) => {
            return (
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "6px",
                  width: "150px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                {product.name}
                <span
                  onClick={() => RemoveProduct(product.name)}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  X
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </center>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});

export default connect(mapStateToProps, { AddProduct, RemoveProduct })(Cart);
