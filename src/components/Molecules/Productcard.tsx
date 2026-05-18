import ProductImage from "../atoms/productImage";
import Button from "../atoms/Button";

type ProductCardProps = {
  image: string;
  name: string;
  price: string;
};

export default function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="card">
      <ProductImage src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
      <Button text="Buy Now" />
    </div>
  );
}