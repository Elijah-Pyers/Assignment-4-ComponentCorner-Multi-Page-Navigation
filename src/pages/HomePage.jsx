import Hero from "../components/Hero";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <main className="page">
      <Hero
        title="Build your setup, one component at a time."
        subtitle="Clean, curated gear for developers."
        ctaText="Shop Featured"
        image="https://placehold.co/1200x400/111111/ffffff?text=ComponentCorner+Featured"
      />

      <section style={{ marginTop: "24px" }}>
        <h2 className="section-title">Why Shop With Us?</h2>
        <ul style={{ lineHeight: 1.8 }}>
          <li>Fast SPA navigation with React Router</li>
          <li>Cart persists using localStorage</li>
          <li>Product detail pages with clean URLs</li>
        </ul>

        <div style={{ marginTop: "12px" }}>
          <Link to="/products" className="btn">
            Browse Products →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
