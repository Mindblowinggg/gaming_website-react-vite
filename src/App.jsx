import { ClimbingBoxLoader } from "react-spinners";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/categories.jsx";
import Trending from "./components/Trendinggames.jsx";
import Footer from "./components/footer.jsx";
import Gameofmonth from "./components/Gameofmonth.jsx";
import FAQ from "./components/faq.jsx";

import { useEffect, useState } from "react";

function App() {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Navbar />

      {/* <Trending />

      <Gameofmonth />

      <FAQ />

      <Footer /> */}
    </div>
  );
}

export default App;
