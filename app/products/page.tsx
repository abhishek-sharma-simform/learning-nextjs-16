import Link from "next/link";

const products = [
  { id: "1", name: "Product - 1" },
  { id: "2", name: "Product - 2" },
  { id: "3", name: "Product - 3" },
];

const Products = () => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
