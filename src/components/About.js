import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import { component } from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log("parent constructor");
    };
    componentDidMount(){
      console.log("parent componentDidMount");
    }
  render() {
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;
    console.log("parent Rendering...");
    return (
      <div>
        <h1>About Us</h1>
        <h3>Developer let's Get Classy</h3>
        {/* <User name={"VIVEK PAL(functional)"} /> */}
        <UserClass name={"Vivek pal(class)"} location={"Meerut"} />
        <UserClass name={"Vivek pal(class)"} location={"Meerut"} /> 
      </div>
    );
  }
}
export default About;