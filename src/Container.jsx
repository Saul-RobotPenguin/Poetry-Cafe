import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Random from "./components/Random";
import ErrorPage from "./components/ErrorPage";
import ReadPoem from "./components/ReadPoem";
import HomePage from "./components/HomePage";
const Container = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
        <Route path="/readpoem" element={<ReadPoem />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Container;
