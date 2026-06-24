import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../features/products/productsSlice";
import type { AppDispatch, RootState } from "../app/store";
import type { Product } from "../types/Product";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

    return (
    <>
        <h1>Home Page</h1>

        <p>Products: {products.length}</p>

        {loading && <p>Loading...</p>}

        {error && <p>{error}</p>}

        {products.map((product: Product) => (
        <div
            key={product.id}
            style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            }}
        >
            <img
            src={product.image}
            alt={product.title}
            width="100"
            />

            <h3>{product.title}</h3>

            <p>${product.price}</p>
        </div>
        ))}
    </>
    );
}

export default Home;