import { useState } from "react"
import ProductCard from "./components/ProductCard"

function App() {
  const [productList, setProductList] = useState([
    {
      courseType: "Bootcamp",
      title: "Programming Laravel",
      description: "Getting Started with Laravel 9",
      price: 600000,
      discountPrice: 200000,
    },
    {
      courseType: "Intensive Bootcamp",
      title: "Programming ReactJS",
      description: "Getting Started with ReactJS",
      price: 500000,
      discountPrice: 199000,
    },
    {
      title: "Programming IoT",
      description: "Getting Started with IoT",
      price: 400000,
      discountPrice: 150000,
    },
    {
      courseType: "Free Bootcamp",
      title: "HTML CSS Fundamental",
      description: "Getting Started with HTML CSS",
      price: 0,
      discountPrice: 0,
    }
  ]);

  const [shoppingCart, setShoppingCart] = useState([]);


  return (
    <div>
      <header className="bg-[#152A46] p-[20px] text-[#ffff]">
        <h1 c>Header</h1>
        <nav>
          <ul className="p-0 m-0 list-none">
            <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 1</a></li>
            <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 2</a></li>
            <li className="inline-block mr-[10px]"><a className="text-white no-underline" href="#">Menu 3</a></li>
            <li className="inline-block mr-[10px]"><span id="saldo">Total Keranjang: {shoppingCart.length}</span></li>
          </ul>
        </nav>
      </header>

      <main className="flex flex-wrap justify-center items-center p-[20px] gap-4">
        {productList.map((product) => (
          <ProductCard 
            key={product.title}
            courseType={product.courseType}
            title={product.title}
            description={product.description}
            price={product.price}
            discountPrice={product.discountPrice}
            addShoppingCart={(selectedProduct) => setShoppingCart([...shoppingCart, selectedProduct])}
          />
        ))}
      </main>

      <footer className="bg-[#152A46] p-[20px] text-[#ffff] text-center">
        <p>&copy; 2023 HTML Javascript dan CSS</p>
      </footer>
    </div>
  )
}

export default App
