import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function SearchBar() {
  return (
    <div className="search-bar">
      <Input />
      <Button text="Search" />
    </div>
  );
}