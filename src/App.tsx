import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import hypGif from "./Assets/gif/SMS-HEG.gif";
import NavBar from "./Components/App/Layout";
import EnquiryForm from "./Components/Common/EnquiryForm/EnquiryForm";
import Home from "./Components/Pages/Home/Home";
import Portfolio from "./Components/Pages/Portfolio/Portfolio";

const App = () => {
  const [showGif, setShowGif] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGif(false);
    }, 1000); // Adjust the duration (in milliseconds) as needed

    return () => {
      clearTimeout(timer); // Clear the timer on component unmount
    };
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <EnquiryForm />
      {showGif ? (
        <div className="loader-img">
          <img src={hypGif} />
        </div>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      )}
    </BrowserRouter>
    // <Comingsoon />
  );
};

export default App;
