import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/App/Layout";
import Home from "./Components/Pages/Home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<DashboardPage />} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
