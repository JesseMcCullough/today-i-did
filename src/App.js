import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import AddDay from "./pages/add-day";
import Days from "./pages/days";
import Activities from "./pages/activities";
import Journals from "./pages/journals";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-day" element={<AddDay />} />
          <Route path="/days" element={<Days />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/journals" element={<Journals />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
