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
      {loading ? (
        <div className="loader-container">
          <ClimbingBoxLoader
            color={"#de5c13"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Categories />
          <div className="w-full h-[100px] bg-[#1C1B29]">
            {/*made a div for a gap*/}
          </div>
          <Trending />
          <div className="w-full h-[100px] bg-[#1C1B29]">
            {/*made a div for a gap*/}
          </div>
          <Gameofmonth />
          
          <FAQ />

          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
