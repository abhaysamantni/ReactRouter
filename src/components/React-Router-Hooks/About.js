import * as React from "react";
import { Navigate } from "react-router-dom";

// This code is an example of Navigate component of React-Router-Hooks Slides 21 and 22 
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: false,
    };
  }
  clickHandler = () => {
    this.setState({ val: true });
    debugger;
  };
  render() {
    return (
      <div>
        <h1>This is the About Page</h1>
        <button onClick={this.clickHandler}>Go to Home</button>
        {this.state.val && <Navigate to="/" />}
      </div>
    );
  }
}

// The About page shows an example of useLocation hook : React-Router-Hooks Slide 12

// import { useLocation } from "react-router-dom";
// const About = () => { 
//     let location = useLocation();
//     console.log(location);
//     return(
//         <h1>Pathname: {location.pathname}</h1>
//     )
//     }
export default About;
