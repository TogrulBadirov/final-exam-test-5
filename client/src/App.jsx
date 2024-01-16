import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AddPage from "./pages/AddPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Wishlist from "./pages/Wishlist";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/addPage" element={<AddPage />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/detail-page/:id" element={<DetailPage />} />
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
