import ProductCard from "../Molecules/Productcard";

export default function ProductSection() {
  return (
    <section className="products">
      <h2>Featured Products</h2>

      <div className="product-grid">
        <ProductCard
          image="https://via.placeholder.com/200"
          name="Wireless Headphones"
          price="₹1999"
        />

        <ProductCard
          image="https://via.placeholder.com/200"
          name="Smart Watch"
          price="₹2499"
        />

        <ProductCard
          image="https://via.placeholder.com/200"
          name="Bluetooth Speaker"
          price="₹1499"
        />
      </div>
    </section>
  );
}