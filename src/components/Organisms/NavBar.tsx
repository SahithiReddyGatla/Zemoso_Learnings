import SearchBar from "../Molecules/SearchBar";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>ShopMart</h2>
      <SearchBar />
      <div className="nav-links">
        <span>Home</span>
        <span>Products</span>
        <span>Contact</span>
      </div>
    </nav>
  );
}