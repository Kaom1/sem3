import "./App.css";

function App() {
return (
    <div style={{marginLeft: "15px"}}>
      <h1>Каталог книг</h1>

      <p>
        Корзина <span id="kolvo"></span>
      </p>

      <div style={{ display: "flex", gap: "15px" }}>
        <div className="card">
          <p>Книга 1</p>
          <p>Достоевский</p>
          <p>100 ₽</p>
          <button>В корзину</button>
        </div>

        <div className="card">
          <p>Книга 2</p>
          <p>Пушкин</p>
          <p>200 ₽</p>
          <button>В корзину</button>
        </div>

        <div className="card">
          <p>Книга 3</p>
          <p>Гоголь</p>
          <p>300 ₽</p>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  );
}

export default App;