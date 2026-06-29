import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Box } from "@mui/material";

import ProductCard from "../components/ProductCard/ProductCard";
import SearchBar from "../components/SearchBar/SearchBar";
import CategoryFilter from "../components/CategoryFilter/CategoryFilter";
import ProductSkeleton from "../components/ProductSkeleton/ProductSkeleton";
import { fetchProducts } from "../features/products/productsSlice";
import Hero from "../components/Hero/Hero";
import type { AppDispatch, RootState } from "../app/store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const { products, loading, error } = useSelector(
    (state: RootState) => state.products
  );

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Hero />

      <p>
        Products found:
        {" "}
        {filteredProducts.length}
      </p>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <Box sx={{ mt: 2 }}>
        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />
      </Box>

      {loading && (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {[...Array(8)].map((_, index) => (
            <Grid
              key={index}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <ProductSkeleton />
            </Grid>
          ))}
        </Grid>
      )}

      {error && <p>{error}</p>}

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {filteredProducts.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Home;