import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function add(card) {
  let kolvo = sessionStorage.getItem("kolvo");
  if (kolvo == null) {
    kolvo = 0;
  }

  kolvo++;
  sessionStorage.setItem("kolvo", kolvo);

  let list = sessionStorage.getItem("list");
  if (list == null) {
    list = "";
  }

  list = list + card + "\n";
  sessionStorage.setItem("list", list);
  window.location.reload();
}

function Catalog() {
  return (
    <div className="katalog">
      <h1>Каталог книг</h1>

      <Link to="/korzina">
        Корзина <span id="kolvo">{sessionStorage.getItem("kolvo") == null ? 0 : sessionStorage.getItem("kolvo")}</span>
      </Link>

       <div id="catalog">
        <div style={{ display: "flex", gap: "15px" }}>
          <div className="card">
            <p>Книга 1</p>
            <p>Автор 1</p>
            <p>500₽</p>
            <button onClick={() => add("Книга 1")}>В корзину</button>
          </div>

          <div className="card">
            <p>Книга 2</p>
            <p>Автор 2</p>
            <p>700₽</p>
            <button onClick={() => add("Книга 2")}>В корзину</button>
          </div>

          <div className="card">
            <p>Книга 3</p>
            <p>Автор 3</p>
            <p>1000₽</p>
            <button onClick={() => add("Книга 3")}>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Korzina() {
  let kolvo = sessionStorage.getItem("kolvo");
  if (kolvo == null) {
    kolvo = 0;
  }

  let list = sessionStorage.getItem("list");
  if (list == null) {
    list = "";
  }

  return (
    <div className="katalog">
      <h1>Корзина</h1>

      <Link to="/">Каталог</Link>

      <button style={{marginLeft: "20px"}} onClick={() => {sessionStorage.clear(); window.location.reload()}}>Очистить</button>

      <p>Количество: <span id="kolvo">{sessionStorage.getItem("kolvo") == null ? 0 : sessionStorage.getItem("kolvo")}</span></p>

      <pre id="korzList">{list}</pre>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog/>} />
      <Route path="/korzina" element={<Korzina/>} />
    </Routes>
  );
}

export default App;