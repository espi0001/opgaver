"use client";

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Page() {
  const { data, error } = useSWR(`https://dummyjson.com/products`, fetcher);
  if (error) return "Failed to load";
  if (!data) return "Loading...";

  //   return <ul>{data.title

  //   }</ul>;
  return (
    <ul>
      {/* det dataset vi får tilbage sætter vi ind i en variabel son hedder products */}
      {data.products.map((product) => {
        return <li key={product.id}>{product.category}</li>;
      })}
    </ul>
  );
}
