// * Side-effects in Functional Components: useEffect()
// * Class-based Components can't use React Hooks

// * componentDidMount() => called once component mounted (was evaluated & rendered) => useEffect(..., [])
// * componentDidUpdate() => called once component updated (was evaluated & rendered) => useEffect(..., [someValue])
// * componentWillUnmount() => called right before component is unmounted (removed from DOM) => useEffect(() => {return () => {...}}, [])

import React from "react";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: true, count: 0 };
  }
  deleteHeader = () => {
    this.setState({ show: false });
  };

  componentDidMount() {
    console.log("ComponentDidMount Method");
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate Method");
  }

  render() {
    let myHeader;
    if (this.state.show) {
      myHeader = <Child />;
    }
    return (
      <div>
        <center>
          {myHeader}
          <button type="button" onClick={this.deleteHeader}>
            Delete Header
          </button>
          <hr />
          <br />
          <h3>count: {this.state.count}</h3>
          <br />
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
        </center>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    console.log("ComponentWillUnmount Method");
  }
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default Container;
