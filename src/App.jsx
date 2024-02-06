import Navbar from "./Navbar"
import Home from "./pages/home/Home"
import Recognize from "./pages/recognize/Recognize"
import Convert from "./pages/convert/Convert"
import Catalog from "./pages/catalog/Catalog"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/currency-trace-frontend/" element={<Home />} />
          <Route
            path="/currency-trace-frontend/recognize"
            element={<Recognize />}
          />
          <Route
            path="/currency-trace-frontend/convert"
            element={<Convert />}
          />
          <Route
            path="/currency-trace-frontend/catalog"
            element={<Catalog />}
          />
        </Routes>
      </div>
    </>
  )
}
export default App
