// const App =  () => {
//   return (
//     <>
//       Welcome to my React App
//       <button>I'm a button</button>
//     </>
//   )
// }
// export {App}
import {Routes, Route} from "react-router-dom"
import About from "./Pages/About.jsx";
import "./App.css"
import {useState} from "react";
import Footer from "./component/footer.jsx";
import Header from "./component/header.jsx";
import Home from "./Pages/Home";
import Signup from './Pages/Signup.jsx';
import Login from "./Pages/Login.jsx";
import Contact from "./Pages/Contact.jsx";
import Loan from "./Pages/Loan.jsx";

// function MyButton() {
//   function handleClick() {
//     alert("You clicked me");
//   }
//   return (
//     <button onClick={handleClick}>
//     Click me
//     </button>
//   );
// }

// function MyButton() {
//   const [count, setCount] = useState(0)
//   function handleClick() {
//     setCount(count+1)
//   }
//   return (
//     <>
//     <button className="bot" onClick={handleClick}>I clicked {count} times</button>
//     </>
//   );
// }

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/loan" element={<Loan/>} />
      <Route path="/signup" element={<Signup/>}/>
      </Routes>
      <Footer />
    </div>
  );
}