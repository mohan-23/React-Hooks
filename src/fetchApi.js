import React, { Component } from "react";

class FetchApi extends Component {
  state = { name: "Mohan", products: [] };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((result) => result.json())
      .then((data) => this.setState({ products: data }))
      .catch((error) => console.log(error));
  }

  render() {
    const { name, products } = this.state;
    console.log(products);
    return (
      <div>
        <center>
          <h1>{name}</h1>
          <button onClick={() => this.setState({ name: "Kandukoori Mohan" })}>
            Change
          </button>
          <br />
          {products.map((object) => (
            <li key={object.id} style={{ textAlign: "left" }}>
              {object.title}
            </li>
          ))}
        </center>
      </div>
    );
  }
}

export default FetchApi;
