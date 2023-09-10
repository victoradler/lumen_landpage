import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import { Header } from "./Components/Header/header";
import { Home } from "./Pages/Home/Home";
import { Projetos } from "./Pages/Projetos/Projetos";
import { Footer } from "./Components/Footer/footer";
import { Transparencia } from "./Pages/Tranparencia/transparencia";
import { QueroSer } from "./Pages/QueroSer/queroser";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="content">
        <Routes>
          <Route path="/lumen_landpage" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/transparencia" element={<Transparencia />} />
          <Route path="/contact" element={<QueroSer />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
