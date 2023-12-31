import { useContext, useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";

import { api } from "../../services/api";
import { CartContext } from "../../context/CartContext";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

function Home() {
  const { addItemCart } = useContext(CartContext);
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProducts() {
      const res = await api.get("/products");
      setProducts(res.data);
    }

    getProducts();
  }, []);

  function handleAddCart(product: ProductProps) {
    toast.success(`${product.title} adicionado ao carrinho`, {
      style: {
        borderRadius: 10,
        backgroundColor: "#121212",
        color: "#FFF",
      },
    });
    addItemCart(product);
  }
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">
          Produtos em alta
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => (
            <section className="w-full" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-full rounded-lg max-h-70 mb-2"
                  src={product.cover}
                  alt={product.title}
                />
              </Link>
              <Link to={`/product/${product.id}`}>
                <p className="font-medium mt-1 mb-2">{product.title}</p>
              </Link>
              <div className="flex gap-3 items-center">
                <strong className="text-zinc-700/90">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
                <button
                  className="bg-zinc-900 p-1 rounded"
                  onClick={() => handleAddCart(product)}
                >
                  <BsCartPlus color="#fff" />
                </button>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
