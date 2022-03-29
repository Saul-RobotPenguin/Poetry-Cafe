import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "./Container";
// import { useEffect } from "react";
// import { themeChange } from "theme-change";

function App() {
  // useEffect(() => {
  //   themeChange(false);
  //   // 👆 false parameter is required for react project
  // }, []);
  return (
    <div>
      <Navbar />
      {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS">
        Change Color
      </button> */}
      <Container />
      <Footer />
    </div>
  );
}

export default App;
