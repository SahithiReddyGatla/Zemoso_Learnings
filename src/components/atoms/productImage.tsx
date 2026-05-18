type ProductImageProps = {
  src: string;
  alt: string;
};

export default function ProductImage({ src, alt }: ProductImageProps) {
  return <img className="product-img" src={src} alt={alt} />;
}