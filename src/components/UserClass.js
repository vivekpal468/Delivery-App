import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log("child constructor");
    this.state = {
      count: 0,
      //   count2: 1,
    };
  }
  componentDidMount() {
    console.log("child componentDidMount");
  }
  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    console.log("child Rendering...");
    return (
      <div className="About">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          IncreaseCount
        </button>
        <h1>{name}</h1>
        <h3>{location}</h3>
        <p>
          Position: I'm a developer and pursuing B.tech(CSE) from IIMT
          University
        </p>
        <p>contact: vivek@gmail.com</p>
      </div>
    );
  }
}
export default UserClass;
