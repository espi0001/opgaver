export default async function Page() {
  let response = await fetch("https://dummyjson.com/products");

  let data = await response.json();
  return (
    <ul className="mb-1">
      {data.products.map((product) => (
        <li key={product.id} className="mb-5">
          {product.title}
          <br />
          {product.price}
        </li>
      ))}
    </ul>
  );
}
