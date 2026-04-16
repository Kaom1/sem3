import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function Catalog() {
  return (
    <div className="katalog">
      <h1>Каталог книг</h1>

      <Link to="/korzina">
        Корзина <span id="kolvo">0</span>
      </Link>

      <div id="catalog">
        <div style={{ display: "flex", gap: "15px" }}>
          <div className="card">
            <p>Книга 1</p>
            <p>Автор 1</p>
            <p>500₽</p>
            <button>В корзину</button>
          </div>

          <div className="card">
            <p>Книга 2</p>
            <p>Автор 2</p>
            <p>700₽</p>
            <button>В корзину</button>
          </div>

          <div className="card">
            <p>Книга 3</p>
            <p>Автор 3</p>
            <p>1000₽</p>
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Korzina() {
  return (
    <div className="katalog">
      <h1>Корзина</h1>

      <Link to="/">Каталог</Link>

      <p>Количество: 0</p>

      <div id="korzList"></div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/korzina" element={<Korzina />} />
    </Routes>
  );
}

export default App;