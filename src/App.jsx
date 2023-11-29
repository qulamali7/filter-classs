import "./index.scss";
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [filterdata, setFilterdata] = useState("All");
  useEffect(() => {
    GetAdminFetch(); 
  }, []);
  async function GetAdminFetch() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  }

  function filter(category) {
    setFilterdata(category);b    
  }

  const productsFilter =
  filterdata === "All"
      ? data
      : data.filter((item) => item.category === filterdata);

  return (
    <div className="App">
      <div className="btns">
        <button onClick={() => {filter("All")}} className="btn">
          All
        </button>
        <button onClick={() => {filter("men's clothing")}} className="btn">
          Men
        </button>
        <button onClick={() => {filter("jewelery")}} className="btn">
          Jewelery
        </button>
        <button onClick={() => {filter("electronics")}} className="btn">
          Electronics
        </button>
        <button onClick={() => {filter("women's clothing")}} className="btn">
          Women
        </button>
      </div>
      <div className="cards">  
        {productsFilter.map((x) => (
          <ul className="card">
            <img src={x.image} alt="" />
            <li>
              <b>Title</b>:{x.title}
            </li>
            <li>
              <b>Price</b>:{x.price}
            </li>
            <li>
              <b>Description</b>:{x.description.slice(0,40)}
            </li>
            <li className="category">
              <b>Category</b>:{x.category}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;
