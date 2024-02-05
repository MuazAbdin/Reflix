import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext.jsx";
import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import Catalog from "./components/Catalog.jsx";
import MovieDetail from "./components/MovieDetail.jsx";
import Modal from "./components/Modal.jsx";

function App() {
  return (
    <AppProvider>
      <Router>
        <Modal />
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/movies/:movieID" element={<MovieDetail />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
