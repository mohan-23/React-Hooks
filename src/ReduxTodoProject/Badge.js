import { connect } from "react-redux";

import React from "react";

const Badge = ({ products }) => {
  return (
    <div style={{ margin: "8px 0px 10px 0px" }}>
      <center>
        <button type="button" className="btn btn-primary position-relative">
          Total Products
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill "
            style={{
              color: "#fff",
              borderRadius: "50px",
              backgroundColor: "red",
            }}
          >
            {products.length}
          </span>
        </button>
      </center>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state,
});

export default connect(mapStateToProps)(Badge);
