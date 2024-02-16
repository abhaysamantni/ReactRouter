import React from "react";
import { useNavigate } from "react-router";


// const Home = () => {
//   return <div>Home</div>;
// };


// This is an example of useNavigate() for React-Router slide 9
const Home = () => {
  const navigate = useNavigate();
  return (
   <div>
       <button onClick={() => {navigate('/about')}}>Go to About</button>
   </div>
 )
}

export default Home;
