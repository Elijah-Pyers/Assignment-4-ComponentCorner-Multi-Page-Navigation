import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
  return (
    <main className="page">
      <h2 className="section-title">Featured Products</h2>

      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </section>
    </main>
  );
}

export default ProductsPage;
