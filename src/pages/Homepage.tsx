import MainTemplate from "../components/Template1/Maintemplate";
import ProductSection from "../components/Organisms/ProductSection";

export default function HomePage() {
  return (
    <MainTemplate>
      <section className="hero">
        <h1>Welcome to ShopMart</h1>
        <p>This website is built using Atomic Design in React + TypeScript.</p>
      </section>

      <ProductSection />
    </MainTemplate>
  );
}